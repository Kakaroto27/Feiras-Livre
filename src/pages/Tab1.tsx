import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonModal, IonPage, IonTabBar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { fileTraySharp, fileTrayStacked, heart, heartCircleOutline, trashBin } from 'ionicons/icons';
import Filtro from './Filtro';

const firebaseConfig = {
  apiKey: "AIzaSyD0EQ_WwexcLOuySG-PA5BEf7vfaFNqLYk",
  authDomain: "afeira-f9ae6.firebaseapp.com",
  projectId: "afeira-f9ae6",
  storageBucket: "afeira-f9ae6.appspot.com",
  messagingSenderId: "803345331495",
  appId: "1:803345331495:web:535ef533e21e19c2a1a502"
};


const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>

        <IonToolbar>
          <IonTitle className='titulo'>Locais das Feiras</IonTitle>
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
          <IonCardHeader>
            
            <IonCardTitle className='titulocard' >
              Feiras visitadas              
            </IonCardTitle>
            <IonCardSubtitle className='subcard' class="ion-text-wrap">
              Últimos locais que você visitou
            </IonCardSubtitle>
          </IonCardHeader>

          <IonList>
              <IonItemSliding>
                      <IonItemOptions side="start">
                        <IonItemOption color="success" expandable>
                          <IonIcon icon={heart}>Favoritar</IonIcon>
                        </IonItemOption>
                      </IonItemOptions>
                <IonItem className='ultimolugar'>
                  <IonLabel> ULTIMa FEIRA</IonLabel>
                </IonItem>
                      <IonItemOptions side="end">
                        <IonItemOption color="danger" expandable>
                          <IonIcon icon={trashBin}>Deletar</IonIcon>
                        </IonItemOption>
                      </IonItemOptions>
              </IonItemSliding> 

              <IonItemSliding>
                      <IonItemOptions side="start">
                        <IonItemOption color="success" expandable>
                          <IonIcon icon={heart}>Favoritar</IonIcon>
                        </IonItemOption>
                      </IonItemOptions>
                <IonItem className='ultimolugar'>
                  <IonLabel>
                    Penultima feira
                  </IonLabel>
                </IonItem>
                      <IonItemOptions side="end">
                        <IonItemOption color="danger" expandable>
                          <IonIcon icon={trashBin}>Deletar</IonIcon>
                        </IonItemOption>
                      </IonItemOptions>
              </IonItemSliding>

          </IonList>
        </IonCard>


        <IonCard className='escolha'>
          <IonCardHeader>
            <IonCardTitle className='titulocard' >
               Escolha sua próxima visita
            </IonCardTitle>
            <IonCardSubtitle className='subcard' 
                              class="ion-text-wrap">
              Descubra mais uma Feira fantastica
            </IonCardSubtitle>
          </IonCardHeader>

            <IonListHeader>
              <IonLabel className='chamadaescolha'
              >      Onde você está?
              </IonLabel>
            </IonListHeader>
 

              <IonButton href='Filtro'
                className='checkescolha'
                >    RJ
              </IonButton>
              <IonButton href='#'
               className='checkescolha'
               >     SP
              </IonButton>
              <IonButton href='#'
               className='checkescolha'
                >    BH
              </IonButton>
            
      



        </IonCard>

       
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
