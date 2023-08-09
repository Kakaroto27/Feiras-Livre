import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import './Tab1.css';

//imports do db//
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc,deleteDoc, getDocs } from "firebase/firestore";


//banco de dados//
const firebase = initializeApp( {
    apiKey: "AIzaSyD0EQ_WwexcLOuySG-PA5BEf7vfaFNqLYk",
    authDomain: "afeira-f9ae6.firebaseapp.com",
    projectId: "afeira-f9ae6",
    storageBucket: "afeira-f9ae6.appspot.com",
    messagingSenderId: "803345331495",
    appId: "1:803345331495:web:535ef533e21e19c2a1a502"
  });

//Config do Export//
const Filtro: React.FC = () => {
    return ( 
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle className="titulo"
                    >   Onde vamos?
                    </IonTitle>
                </IonToolbar>    
            </IonHeader>

            <IonContent fullscreen>
                <IonCard className='datahora'>
                    <IonDatetime 
                        class='relogio' 
                        locale='pt-br'
                        hourCycle="h23"  
                        presentation='time-date' 
                        preferWheel    >
                    </IonDatetime>
                </IonCard>
                
                <IonCard>
                {/*card para selecionar qual filtro será usado*/}    
                    
                    <IonItem className="caixaseleciona">
                        <IonSelect label="Escolha por Bairro" labelPlacement="floating" >
                            
                        </IonSelect>
                    </IonItem>
                {/*final do card de escolhas*/}
                </IonCard>


                <IonCard>
                {/*Card que aparece ultimos locais*/}
                    <IonCardHeader>
                        
                        <IonCardTitle className='titulocard' >
                            Feiras visitadas              
                        </IonCardTitle>
                        <IonCardSubtitle className='subcard' class="ion-text-wrap">
                            Últimos locais que você visitou
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonItem >
                        <IonThumbnail slot="start">

                        </IonThumbnail>
                        <IonLabel></IonLabel>
                    </IonItem>
                {/*final de 'ultimos locais'*/}    
                </IonCard>

            </IonContent>
        </IonPage>
    )

}


/*Config do db*/
const [Bairro, setBairro] = useState("");
const [dia, setdia] = useState("");
const db = getFirestore(firebase);
const userCollectionRef = collection(db, "filtrorj");

async function criarDado() {
    try {
      const user = await addDoc(collection(db, "filtrorj"), {
        Bairro,
        dia,
      });

      console.log("dados salvos com sucessos", user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
    useEffect(() => {
      const pegabairro = async () => {
          const data = await getDocs(userCollectionRef);
          setBairro(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };
      pegabairro();
    });

export default Filtro;







  