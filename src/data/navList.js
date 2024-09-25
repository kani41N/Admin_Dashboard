import { FaUser, FaTachometerAlt, FaCog, FaEnvelope, FaBell, FaQuestionCircle, FaSignOutAlt, FaChartLine, FaChartBar, FaLifeRing } from 'react-icons/fa';

const navList = [
  { _id: 1, name: 'profile', icon: <FaUser /> },
  { _id: 2, name: 'dashboard', icon: <FaTachometerAlt /> },
  { _id: 3, name: 'settings', icon: <FaCog /> },
  { _id: 4, name: 'messages', icon: <FaEnvelope /> },
  { _id: 5, name: 'notifications', icon: <FaBell /> },
  { _id: 6, name: 'help', icon: <FaQuestionCircle /> },
  { _id: 7, name: 'logout', icon: <FaSignOutAlt /> },
  { _id: 8, name: 'reports', icon: <FaChartLine /> },
  { _id: 9, name: 'analytics', icon: <FaChartBar /> },
  { _id: 10, name: 'support', icon: <FaLifeRing /> }
];

export default navList;
