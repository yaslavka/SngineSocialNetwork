import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import routesLik from '../../constants/routes.constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function AuthPageContainer({ siteInfo, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <div className={styles.formContainer}>
          <Link to={routesLik.root} className={styles.logoLink}>
            <img
              src={`${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.logo}`}
              alt={siteInfo.seoImage}
              className={styles.logo}
            />
          </Link>
          <div className={styles.formInner}>
            <h2 className={styles.signTitle}>{siteInfo.question}</h2>
            {children}
          </div>
        </div>
      </div>
      <Swiper
        autoplay
        loop
        slidesPerView={0.9}
        spaceBetween={10}
        speed={500}
        parallax={true}
        pagination={true}
        modules={[Pagination, Autoplay, Parallax]}
        className={styles.col2}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img
            src={`${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.slide1}`}
            alt={siteInfo.seoImage}
            className={styles.zoomImage}
          />
          <div className={styles.helloContainer}>
            <div className={styles.helloInner}>
              <h1 className={styles.helloTitle}>{siteInfo.hello1}</h1>
              <h2 className={styles.helloSub}>{siteInfo.helloSub}</h2>
            </div>
          </div>
          <div className={styles.gradient}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            src={`${process.env.REACT_APP_INFO_BASE_URL}/${siteInfo.slide2}`}
            alt={siteInfo.seoImage}
            className={styles.zoomImage}
          />
          <div className={styles.helloContainer}>
            <div className={styles.helloInner}>
              <h1 className={styles.helloTitle}>{siteInfo.hello2}</h1>
              <h2 className={styles.helloSub}>{siteInfo.helloSub2}</h2>
            </div>
          </div>
          <div className={styles.gradient}></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AuthPageContainer
