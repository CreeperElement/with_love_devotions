import './Tab.css'

function Tab(props) {
    return (
        <button className='note-tab' onClick={onSelect(props)} >{props.text}</button>
    );
}

function onSelect(props) {
    return () => {
        props.onSelect(props.id);
    }
}

export default Tab;