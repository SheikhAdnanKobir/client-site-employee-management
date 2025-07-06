import React from 'react';
import Banner from './Banner/Banner';
import Section1st from './Section/Section1st';
import Section2nd from './Section/Section2nd';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Section1st/>
            <Section2nd/>
        </div>
    );
};

export default Home;

echo "# client-site-employee-management" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SheikhAdnanKobir/client-site-employee-management.git
git push -u origin main