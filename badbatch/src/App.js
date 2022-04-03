import styles from './App.module.css';

import Card from './Card';
import Footer from './Footer';
import Header from './Header';


const clones = [
  {
    title: "Hunter", imgLink: "https://starwarsblog.starwars.com/wp-content/uploads/2021/04/the-bad-batch-character-poster-hunter-01973863.jpg", content: "Hunter was the nickname of a clone commando sergeant who served as the commanding officer of Clone Force 99 in the Grand Army of the Republic during the Clone Wars, fought between the Galactic Republic and the Confederacy of Independent Systems. He was genetically altered to have heightened senses and commanded his comrades who had their own unique mutations, in what they called the 'Bad Batch'.", isSelected: true, loyaltyToTheEmpire: false
  },
  {
    title: "Crosshair", imgLink: "https://starwarsblog.starwars.com/wp-content/uploads/2021/04/the-bad-batch-character-poster-crosshair-373973937923.jpg", content: "CT-9904, nicknamed 'Crosshair', was a clone commando who served in the Grand Army of the Republic during the Clone Wars as part of Clone Force 99. Crosshair possessed genetic mutations that gave him exceptional eyesight and because of it, he acted as a sniper, taking advantage of his marksmanship skills. Upon the activation of Order 66, Crosshair was the lone member of Clone Force 99 that attempted to carry out the order.", isSelected: false, loyaltyToTheEmpire: true
  },
  {
    title: "Tech", imgLink: "https://starwarsblog.starwars.com/wp-content/uploads/2021/04/the-bad-batch-character-poster-tech-297322.jpg", content: "Tech was the nickname of a clone commando who served in the Grand Army of the Republic during the Clone Wars as a member of Clone Force 99. Due to his genetic mutations, he appeared leaner, fairer, and younger than his fellow clone troopers. Tech served as the brains of his squad and was a valued asset in this regard, using his high intellect and mastery of technology to ensure their operations were successful. Even so, he was no less skilled in combat than the other three members.", isSelected: false
  },
  {
    title: "Wrecker", imgLink: "https://starwarsblog.starwars.com/wp-content/uploads/2021/04/the-bad-batch-character-poster-wrecker-1027333.jpg", content: "Wrecker was a clone commando who served in the Grand Army of the Republic during the Clone Wars as part of Clone Force 99. Due to genetic mutations, Wrecker was much larger and stronger than the average clone trooper. He loved blowing things up, and served as the muscle and demolitions expert for his squad, which was nicknamed the Bad Batch. Wrecker lived through many dangerous missions during the Clone Wars, including the Battle of Anaxes in the last year of the war.", isSelected: false
  },
  {
    title: "Echo", imgLink: "https://starwarsblog.starwars.com/wp-content/uploads/2021/04/the-bad-batch-character-poster-echo-3819112.jpg", content: "Echo, originally designated CT-1409 and known as the Hero of Anaxes, was a clone trooper and Corporal who served the Grand Army of the Galactic Republic during the Clone Wars. Born on Kamino, Echo was originally identified as CT-21-0408, a cadet of the Domino Squad along with his friends, CT-782 'Hevy', CT-4040 'Cutup', CT-00-2010 'Droidbait', and CT-5555 'Fives', before he graduated from the clone training center.", isSelected: false
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {
          clones.map((clone) => <Card title={clone.title} imgLink={clone.imgLink} content={clone.content} isSelected={clone.isSelected} loyaltyToTheEmpire={clone.loyaltyToTheEmpire} />)
        }
      </div>
      <Footer />

    </>
  );
}

export default App;
