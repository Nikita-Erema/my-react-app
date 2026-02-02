import { NavHeader } from "./NavHeader";
import './Header.css';

export function Header() {
  return (
    <header className='header-main'>
      <NavHeader></NavHeader>
      <div className='header-box'>
        <div className='box-quote-form-header'>
          <div className='quote-section'>
            <h1 className='quote-header'>
              <span className='quote-slim-header'>Вся жизнь -</span>
              <span className='quote-bolder-header'>путешествие!</span>
            </h1>
          </div>
          
          <form className='form-header'>
            <div className='form-group'>
              <label>Направление</label>
              <div>
                <input type='text' placeholder='' />
                <input type='text' placeholder='' />
              </div>
            </div>
            
            <div className='form-group'>
              <label>Дата</label>
              <div>
                <input type='text' placeholder='' />
                <input type='text' placeholder='' />
              </div>
            </div>
            
            <button className='btn-tickets'>НАЙТИ БИЛЕТЫ</button>
          </form>
        </div>
      </div>
    </header>
  );
}