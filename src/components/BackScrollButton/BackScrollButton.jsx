import { useState, useEffect } from 'react';
import { Icon, Button } from './BackScrollButton.styled';
import { icons } from '../../assets';

const OFFSET_TRIGGER = 100;

const BackScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > OFFSET_TRIGGER && !visible) {
      setVisible(true);
    } else if (scrolled <= OFFSET_TRIGGER) {
      setVisible(false);
    }
  };

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <Button
      type="button"
      className={visible ? '' : 'hidden'}
      title="Back to top"
      onClick={scrollToTop}
    >
      <Icon aria-label="Back to top">
        <use href={`${icons}#icon-back-top`} />
      </Icon>
    </Button>
  );
};

export default BackScrollButton;
