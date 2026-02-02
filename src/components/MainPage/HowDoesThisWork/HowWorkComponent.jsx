import './HowWorkComponent.css';

export function HowWorkComponent() { 
    return (
        <div className="how-work-component">
            <div className=''>
                <h2 className='how-work-title' id='how-it-works'>Как это работает</h2>
                <button>yзнaть больше</button>
            </div>
            <div>
                <div className='how-work-step'>
                    <img src='' alt='icon-step-1' />
                    <p className='how-work-text'>Удобный заказ на сайте</p>
                </div>
                <div className='how-work-step'>
                    <img src='' alt='icon-step-1' />
                    <p className='how-work-text'>Нет необходимости ехать в офис</p>
                </div>
                <div className='how-work-step'>
                    <img src='' alt='icon-step-1' />
                    <p className='how-work-text'>Огромный выбор направлений</p>
                </div>
            </div>
        </div>
    )
}