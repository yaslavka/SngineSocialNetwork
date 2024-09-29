import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
function ModalStories({ initial }) {
  const [initialIndexSlide, setInitialIndexSlide] = useState(0);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const timestamp = function () {
    let timeIndex = 1678166046264 / 1000;
    let random = Math.floor(Math.random() * 1000);

    return Math.round(timeIndex - random);
  };
  const [indexSlide, setIndexSlide] = useState(0);
  const stories = [
    {
      id: 'ramon',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/1.jpg',
      name: 'Ramon',
      time: 9000,
      items: [
        {
          id: 'ramon-1',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
          link: '',
          linkText: false,
          time: 3000,
        },
        {
          id: 'ramon-2',
          type: 'video',
          length: 0,
          src: '/1.mp4',
          // preview:
          //   'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.jpg',
          link: '',
          linkText: false,
          time: 5000,
        },
        {
          id: 'ramon-3',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
          link: 'https://ramon.codes',
          linkText: 'Visit my Portfolio',
          time: 5000,
        },
      ],
    },
    {
      id: 'gorillaz',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/2.jpg',
      name: 'Gorillaz',
      time: 5000,
      items: [
        {
          id: 'gorillaz-1',
          type: 'video',
          length: 0,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.mp4',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.jpg',
          link: '',
          linkText: false,
          time: 5000,
        },
        {
          id: 'gorillaz-2',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
          link: '',
          linkText: false,
          time: 5000,
        },
      ],
    },
    {
      id: 'ladygaga',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/3.jpg',
      name: 'Lady Gaga',
      time: 5000,
      items: [
        {
          id: 'ladygaga-1',
          type: 'photo',
          length: 5,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
          link: '',
          linkText: false,
          time: 5000,
        },
        {
          id: 'ladygaga-2',
          type: 'photo',
          length: 3,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
          link: 'http://ladygaga.com',
          linkText: false,
          time: 5000,
        },
      ],
    },
    {
      id: 'starboy',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/4.jpg',
      name: 'The Weeknd',
      time: 5000,
      items: [
        {
          id: 'starboy-1',
          type: 'photo',
          length: 5,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
          link: '',
          linkText: false,
          time: 5000,
        },
      ],
    },
    {
      id: 'riversquomo',
      photo:
        'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg',
      name: 'Rivers Cuomo',
      time: 5000,
      items: [
        {
          id: 'riverscuomo-1',
          type: 'photo',
          length: 10,
          src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
          preview:
            'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
          link: '',
          linkText: false,
          time: 5000,
        },
      ],
    },
  ];
  const onAutoplayTimeLeft = (s, time, progress) => {
    console.log(time);
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
  };

  const onSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setIndexSlide(currentIndex);
    // const timesSlide = stories[initialIndexSlide].items[currentIndex].time;
    const totalSlides = stories[initialIndexSlide].items.length;
    const timesEndSlide = stories[initialIndexSlide].items[currentIndex].time;
    if (currentIndex === totalSlides - 1) {
      const time = setTimeout(() => {
        setInitialIndexSlide((prev) => Math.min(prev + 1, stories.length - 1));
        setIndexSlide(0);
      }, timesEndSlide);
      return () => clearTimeout(time);
    }
  };
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.modalBg} />
      <div className={styles.modalContentContainer}>
        <Swiper
          navigation
          slidesPerView={1}
          spaceBetween={0}
          initialSlide={initialIndexSlide}
          className={styles.swiperContainer}
          modules={[Navigation]}>
          {stories.map((item, index) => (
            <>
              {item.items.map((s, i) => (
                <Swiper
                  autoplay={{
                    delay: s.time,
                  }}
                  slidesPerView={1}
                  spaceBetween={0}
                  className={styles.swiper}
                  modules={[Autoplay]}
                  initialSlide={indexSlide}
                  onSlideChange={onSlideChange}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}>
                  <SwiperSlide key={i} className={styles.swiperSlide}>
                    {s.type === 'photo' ? (
                      <img src={s.src} className={styles.iframe} />
                    ) : (
                      // <iframe
                      //   className={styles.iframe}
                      //   src={item.src}
                      //   width='853'
                      //   height='480'
                      //   allow='autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
                      //   frameBorder='0'
                      //   allowFullScreen></iframe>
                      <video
                        src={s.src}
                        autoPlay
                        loop
                        muted
                        className={styles.iframe}
                      />
                    )}
                  </SwiperSlide>
                </Swiper>
              ))}
            </>
          ))}
        </Swiper>
        <div className={'autoplay-p'}>
          {stories[initialIndexSlide].items.map((d, n) => (
            <button key={n} className='autoplay-progress'>
              <div
                className={`progress ${styles.progress}`}
                ref={progressContent}
                style={{ width: progressContent }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModalStories;
