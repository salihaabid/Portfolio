import styles from './About.module.scss';
import Info from './Info';
import Skills from './Skills';
import MainHeading from '../../ui/MainHeading';
import Counter from './Counter';
function About() {
  return (
    <div className={styles.about} id='about'>
      <MainHeading
        heading='About'
        title='I am Saliha Abid, a dedicated and passionate web developer. Despite my young age, my enthusiasm for web development knows no bounds. My journey began with a curiosity for technology, and it has evolved into a relentless pursuit of excellence in the field of web development.'
      />
      <Info />
      <Counter />
      <Skills />
    </div>
  );
}

export default About;

//
