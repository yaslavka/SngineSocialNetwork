import React from 'react';
import { useSelector } from 'react-redux';
import { countries_data } from '../../../utils/datas/countries.data';

function StageTwo({
  translate,
  city,
  cityBirthday,
  eduClass,
  eduMajor,
  setBirthday,
  setCity,
  setCountriesCode,
  setCountriesName,
  setEduClass,
  setEduMajor,
  setEduSchool,
  setWorkPlace,
  setWorkTitle,
  setWorkUrl,
  workPlace,
  workTitle,
  workUrl,
  eduSchool,
}) {
  const startedStageSuccess = useSelector((state) => state.app.startedStageSuccess);

  const handleChangeCountries = (e) => {
    const country = countries_data.find((i) => i.country_code === e.target.value);
    if (country) {
      setCountriesCode(country.country_code);
      setCountriesName(country.country_name);
    }
  };

  return (
    <>
      <div className='text-center'>
        <h3 className='mb5'>{translate('stageTwo.title')}</h3>
        <p className='mb20'>{translate('stageTwo.subTitle')}</p>
      </div>
      <div className={'js_ajax-forms'}>
        <div className='heading-small mb20'>{translate('geoLocation')}</div>
        <div className={'pl-md-4'}>
          <div className={'form-group'}>
            <label className='form-control-label' htmlFor='country'>
              {translate('country')}
            </label>
            <select className={'form-control'} name={'country'} id='country' onChange={handleChangeCountries}>
              <option value='none' defaultValue={translate('stageTwo.choiceCountry')} disabled selected>
                {translate('stageTwo.choiceCountry')}
              </option>
              {countries_data.map((item, index) => (
                <option key={index} value={item.country_code}>
                  {translate(item.country_name)}
                </option>
              ))}
            </select>
          </div>
          <div className={'row'}>
            <div className={'form-group col-md-6'}>
              <label className='form-control-label' htmlFor='city'>
                Текущий город
              </label>
              <input
                type='text'
                className='form-control js_geocomplete'
                name='city'
                id='city'
                value={city ? city : ''}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div className='form-group col-md-6'>
              <label className='form-control-label' htmlFor='hometown'>
                Город рождения
              </label>
              <input
                type='text'
                className='form-control js_geocomplete'
                name='hometown'
                id='hometown'
                value={cityBirthday ? cityBirthday : ''}
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='heading-small mb20'>Работа</div>
        <div className='pl-md-4'>
          <div className='form-group'>
            <label className='form-control-label' htmlFor='work_title'>
              Должность
            </label>
            <input
              type='text'
              className='form-control'
              name='work_title'
              id='work_title'
              value={workTitle ? workTitle : ''}
              onChange={(e) => {
                setWorkTitle(e.target.value);
              }}
            />
          </div>
          <div className='row'>
            <div className='form-group col-md-6'>
              <label className='form-control-label' htmlFor='work_place'>
                Место работы
              </label>
              <input
                type='text'
                className='form-control'
                name='work_place'
                id='work_place'
                value={workPlace ? workPlace : ''}
                onChange={(e) => {
                  setWorkPlace(e.target.value);
                }}
              />
            </div>
            <div className='form-group col-md-6'>
              <label className='form-control-label' htmlFor='work_url'>
                Веб-сайт
              </label>
              <input
                type='text'
                className='form-control'
                name='work_url'
                id='work_url'
                value={workUrl ? workUrl : ''}
                onChange={(e) => {
                  setWorkUrl(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='heading-small mb20'>Образование</div>
        <div className='pl-md-4'>
          <div className='form-group'>
            <label className='form-control-label' htmlFor='edu_major'>
              Статус: Высшее, не полное высшее, специальное, среднее, не оконченное среднее
            </label>
            <input
              type='text'
              className='form-control'
              name='edu_major'
              id='edu_major'
              value={eduMajor ? eduMajor : ''}
              onChange={(e) => {
                setEduMajor(e.target.value);
              }}
            />
          </div>
          <div className='row'>
            <div className='form-group col-md-6'>
              <label className='form-control-label' htmlFor='edu_school'>
                Институт, училище, школа
              </label>
              <input
                type='text'
                className='form-control'
                name='edu_school'
                id='edu_school'
                value={eduSchool ? eduSchool : ''}
                onChange={(e) => {
                  setEduSchool(e.target.value);
                }}
              />
            </div>
            <div className='form-group col-md-6'>
              <label className='form-control-label' htmlFor='edu_class'>
                Кафедра, группа, класс
              </label>
              <input
                type='text'
                className='form-control'
                name='edu_class'
                id='edu_class'
                value={eduClass ? eduClass : ''}
                onChange={(e) => {
                  setEduClass(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {startedStageSuccess && <div className='alert alert-success'>{translate(startedStageSuccess)}</div>}
      </div>
    </>
  );
}

export default StageTwo;
