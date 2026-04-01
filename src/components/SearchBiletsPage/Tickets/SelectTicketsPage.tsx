import './SelectTicketPageStyle.css'

export function SelectTicketPage() {

    return (
        <div className="box-select-page">
            <button type='submit' className='item-select-page'>-</button>
            <button type='submit' className='item-select-page item-select-page-active'>1</button>
            <button type='submit' className='item-select-page'>2</button>
            <button type='submit' className='item-select-page'>3</button>
            <button type='submit' className='item-select-page'>+</button>
        </div>
    )
}
