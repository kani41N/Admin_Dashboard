import React from 'react';
import './dashboard.css';
import { useState, useEffect } from 'react';
import Card from './Card';
import Report from './Reports';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';
import WebTraffic from './WebTraffic';
import News from './News';

function Dashboard() {
    const[cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        .catch(error => {
            console.log('Fetch error:', error);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
               <div className="row">
                {
                    cards && cards.length>0 &&
                     cards.map(card => <Card key={card._id} card={card}/>)
                }
                <div className='col-12'>
                    <Report />
                </div>
                 <div className='col-12'>
                    <RecentSales />
                 </div>
                 <div className='col-12'>
                   <TopSelling />
                 </div>
               </div>
            </div>
            <div className="col-lg-4">
                <RecentActivity />
                <BudgetReport />
                <News />
            </div>
        </div>
    </section>
  )
}

export default Dashboard;
