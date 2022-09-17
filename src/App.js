import './App.css';
import NavBar from './NavBar.js';
import Header from './Header.js';
import Question from './Question.js';
import Footer from './Footer.js';

export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Question 
        question="BREAKFAST :D"
        choices={["Denica's Ube Pancakes",
          "A Bagel Cafe Bagel",
          "TJ's Green Onion Pancakes (w/ sauce)",
          "Soup"
        ]}
      />
      <Question 
        question="Now, it's lunch time!"
        choices={["Pork chop & Rice",
          "Poke",
          "Ramen",
          "Vons"
        ]}
      
      />
      <Question
        question="What's for dinner?"
        choices={["Korean BBQ & Hotpot",
          "Sushi & Sashimi",
          "Mediteranean food",
          "Hawaiian BBQ"
      ]}
      />
      <Footer />
    </div>
  );
}

