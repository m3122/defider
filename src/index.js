import React from 'react'
import { createRoot } from 'react-dom/client';

import Layout from './components/layout'

import './stylesheets/index.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(<Layout />);
