import './Footer.css';

export function Footer() {
  return (
    <footer className='footer-main'>
      <div className='footer-content'>
        <div className='feedback-footer'>
          <h3 className='title-text-footer'>Свяжитесь с нами</h3>
          <p className='feedback-text-footer'>8 (800) 000 00 00</p>
          <p className='feedback-text-footer'>inbox@mail.ru</p>
          <p className='feedback-text-footer'>tu.train.tickets</p>
          <p className='feedback-text-footer'>г. Москва ул. московская 12 81</p>
        </div>
        <div className='subscription-footer'>
          <h3 className='title-text-footer'>Подписка</h3>
          <p className='feedback-text-footer'>Будьте в курсе событий</p>
          <form>
            <input className='input-subscription-footer' type="email" placeholder='Введите ваш email' />
            <button className='button-subscription-footer' type="submit">Отправить</button>
          </form>
          <h3 className='title-text-footer'>Подписывайтесь на нас</h3>
          <div className='social-icons-footer'>
            <div className='social-icon-footer vk-icon-footer'></div>
            <div className='social-icon-footer tg-icon-footer'></div>
            <div className='social-icon-footer wa-icon-footer'></div>
          </div>
        </div>
      </div>
      <div className='open-close-footer'>
        <p className='title-text-footer'>Лого</p>
        <p className='footer-bottom-text'>^</p>
        <p className='footer-bottom-text'>2018 WEB</p>
      </div>
    </footer>
  );
}