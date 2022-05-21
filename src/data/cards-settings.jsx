import { ReactComponent as WorkIcon } from '../images/icon-work.svg';
import { ReactComponent as PlayIcon } from '../images/icon-play.svg';
import { ReactComponent as StudyIcon } from '../images/icon-study.svg';
import { ReactComponent as ExerciseIcon } from '../images/icon-exercise.svg';
import { ReactComponent as SocialIcon } from '../images/icon-social.svg';
import { ReactComponent as CareIcon } from '../images/icon-self-care.svg';

export const cardsSettings = {
  Work: {
    className: 'bg-light-red',
    image: <WorkIcon />,
  },
  Play: {
    className: 'bg-soft-blue',
    image: <PlayIcon />,
  },
  Study: {
    className: 'bg-pink-red',
    image: <StudyIcon />,
  },
  Exercise: {
    className: 'bg-lime-green',
    image: <ExerciseIcon />,
  },
  Social: {
    className: 'bg-violet',
    image: <SocialIcon />,
  },
  'Self Care': {
    className: 'bg-soft-orange',
    image: <CareIcon />,
  },
};
