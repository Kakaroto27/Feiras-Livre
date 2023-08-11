import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonSelect, IonSelectOption, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import './Tab1.css';

//imports do db//
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs } from "firebase/firestore";

    //banco de dados//
    const firebase = initializeApp ({
          apiKey: "AIzaSyD0EQ_WwexcLOuySG-PA5BEf7vfaFNqLYk",
  authDomain: "afeira-f9ae6.firebaseapp.com",
  projectId: "afeira-f9ae6",
  storageBucket: "afeira-f9ae6.appspot.com",
  messagingSenderId: "803345331495",
  appId: "1:803345331495:web:535ef533e21e19c2a1a502"
    });

    

//Config do Export//
const Filtro: React.FC = () => {

    

    /*Config do db*/


    const [bairro, setbairro] = useState("");
    const [dia, setdia] = useState("");
    const [users, setfeiras] = useState([])
 
    const db = getFirestore(firebase);
    const userCollectionRef = collection(db, "users");

    useEffect(() => {
        const pegabairro = async () => {
            const data = await getDocs(userCollectionRef);
            setfeiras(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        pegabairro();
    });

    async function criarDado() {
        try {
        const user = await addDoc(collection(db, "users"), {
            bairro,
            dia,
        });

        console.log("dados salvos com sucessos", bairro);
        } catch (e) {
        console.error("Error adding document: ", e);
        }


    }
    

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
                           <IonThumbnail><IonList></IonList></IonThumbnail> 
                        </IonSelect>
                    </IonItem>
                {/*final do card de escolhas*/}
                </IonCard>
                
                
                {/*testes*/}
                    <IonCard>
                        <IonCardHeader>
                            <IonLabel>testes</IonLabel>
                        </IonCardHeader>
                        <IonItem>
                            <IonInput   type="text"
                                        placeholder="Baiiro"
                                        value={bairro}
                                        onChange={(e) => setbairro(e.target.value)}
                            />
                            <IonInput   type="text"
                                        placeholder="Diia"
                                        value={dia}
                                        onChange={(e) => setdia(e.target.value)}
                            />
                            <IonButton onClick={criarDado}>Criar dado</IonButton>
                        </IonItem>

                    </IonCard>

                <IonCard>{/*Card que aparece ultimos locais*/}
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
                </IonCard>{/*final de 'ultimos locais'*/}

            </IonContent>
        </IonPage>
    )

}




export default Filtro;







  