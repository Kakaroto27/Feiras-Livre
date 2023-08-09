import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';




import './Tab2.css';
import { CapacitorGoogleMaps } from '@capacitor/google-maps/dist/typings/implementation';



const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='titulo'>Mapa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">map2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
            
        </IonCard>
      </IonContent>
      
    </IonPage>
  );
};

export default Tab2;
