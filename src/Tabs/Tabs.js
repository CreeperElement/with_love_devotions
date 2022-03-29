import './Tabs.css';
import Tab from './Tab';

function Tabs(props) {
    return(
        <span className='tabs'>
            {
                props.metadata.map(md => {
                    return <Tab text={md.title} id={md.id} key={md.id} onSelect={props.onSelect} />
                })
            }
        </span>
    );
}


export default Tabs;