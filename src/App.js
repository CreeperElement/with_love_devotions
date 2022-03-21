import logo from './logo.svg';
import './App.css';
import db from './firestore';
import { useState } from 'react';

const DEVOTION_METADATA = "devotion-metadata";
const DEVOTION_CONTENT = "devotion-content";


/*State
  metadata: [<document id>] = each id is the same for metadata and content
    {
      id: Document id for the collection. Is the same as the id in the content documents
      publish: {
        nanoseconds: nanoseconds since 1970
        seconds: seconds since 1970
      }
      title: The title of the devotion
    }
  ]

*/


function App() {
  const devMetaDataRef = db.collection(DEVOTION_METADATA);
  const devContentRef = db.collection(DEVOTION_CONTENT);
  
  const [metadata, setState] = useState(loadAllDocumentMetadata(devMetaDataRef));
  
  console.log(metadata);

  return (
    <div className="App">
      <header className="App-header">
        <div className='notebook'>
            <span className='book-content'>
              <p>
                {getLoremIpsum()}
              </p>
            </span>
            <span className='tabs'>
                <button className='note-tab'>Peace From A Lack of Answers</button>
                <button className='note-tab'>Thy Will Be Done</button>
                <button className='note-tab'>Who Am I (Not To)</button>
                <button className='note-tab'>Coming Soon</button>
            </span>
          </div>
      </header>
    </div>
  );
}

function loadAllDocumentMetadata(metadataRef) {
  let metadataArray = [];
  metadataRef.get().then(snapshot => snapshot.docs.forEach(document => {
    const data = document.data();
    metadataArray.push({
      id: document.id,
      publish: data.publish,
      title: data.title
    });
  }));
  return metadataArray;
}

function loadDevotionFromDocumentId() {

}

function getLoremIpsum() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend rutrum neque, eu condimentum ex varius non. Cras aliquet iaculis leo ut facilisis. Ut placerat nunc non leo varius commodo. Pellentesque at varius nisi, a porta velit. Nulla tincidunt lectus id nunc pulvinar mollis. Suspendisse potenti. Nunc mattis eros vitae dolor imperdiet lobortis. Donec egestas eros non semper efficitur. Vestibulum feugiat eu leo quis posuere. Nulla metus sem, suscipit vel facilisis sit amet, blandit ac mi.\n\n" +  
  "Duis venenatis velit nec semper tincidunt. Nullam iaculis, lorem vel sagittis eleifend, metus erat commodo diam, in pellentesque ligula nulla vel sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate risus massa, eget pharetra libero scelerisque id. Duis vel arcu est. Phasellus hendrerit at dui eu elementum. Integer malesuada vulputate condimentum. Quisque laoreet consectetur lacus quis tempor. Vivamus mattis nibh sed dignissim congue.\n\n" +
  "Mauris ornare nulla ut risus varius placerat. Quisque ullamcorper at nisi non pharetra. Maecenas bibendum purus sem, vitae maximus felis gravida at. Donec porttitor ullamcorper eros, sit amet aliquet massa mollis sit amet. Nam quis est id justo maximus sollicitudin ac non urna. Quisque ut sem fermentum, interdum ligula in, aliquet ligula. Maecenas bibendum justo sed porttitor interdum. Etiam pulvinar dapibus ligula, at imperdiet est vehicula quis.\n\n" +
  "Fusce pulvinar elementum lobortis. Phasellus auctor, mi a semper maximus, quam turpis molestie nulla, quis maximus mi libero gravida urna. Sed sagittis, magna nec mattis tempus, neque purus mattis ante, sed fringilla ipsum arcu in ipsum. Aenean vitae mauris vehicula nisi mollis pellentesque. Vivamus tristique lectus ante, eu tempor leo tincidunt semper. Morbi ut lacinia risus. Nunc ullamcorper semper ante vitae tristique. Nulla quis purus in dui convallis congue.\n\n" +
  "Sed vel euismod nibh. Curabitur velit orci, fermentum sit amet condimentum at, commodo efficitur tortor. Morbi a tempor ante. Sed tincidunt massa et diam venenatis, at scelerisque nunc elementum. Aenean ut fringilla nulla. Aenean blandit tincidunt mi, vitae tempor ipsum mattis vel. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam eget gravida massa, pretium sodales arcu. Quisque commodo, neque ac porta pharetra, tortor nisi tempor erat, lobortis lacinia odio ex sit amet orci. Quisque at turpis sem. Phasellus suscipit tincidunt laoreet. Donec eu felis porta, sollicitudin mauris nec, dapibus enim. Morbi vitae magna neque. Vestibulum in fermentum dui. ";
}

export default App;
