import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
    '/': 'Home | Mohamed Hassan',
    '/about': 'About | Mohamed Hassan',
    '/experience': 'Experience | Mohamed Hassan',
    '/work': 'Work | Mohamed Hassan',
    '/contact': 'Contact | Mohamed Hassan'
};

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        // Check for specific project routes or default
        if (location.pathname.startsWith('/project/')) {
            document.title = 'Project Details | Mohamed Hassan';
        } else {
            document.title = routeTitles[location.pathname] || 'Mohamed Hassan | Vibe Coder';
        }
    }, [location]);

    return null;
};

export default DynamicTitle;
