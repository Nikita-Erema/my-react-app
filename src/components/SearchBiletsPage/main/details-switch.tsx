import './SelectTickets.css'

export function DetailsSwitch({d, name, children}: {d?: string, name: string, children?: React.ReactNode}) {
    return (
        <div className="box-checkbox">
            { children ? 
                children
                :
            <svg width="20" height="20" viewBox="1 1 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d={d} fill="#E5E5E5"/>
            </svg>
            }
            <p className='title-switch'>{name}</p>
            <label title="switch">
                <input className='switch-input' type="checkbox"/>
                <span className='checkbox-visibility'>
                    <span className='circle-checkbox'></span>
                </span>
            </label>
        </div>
    )
}