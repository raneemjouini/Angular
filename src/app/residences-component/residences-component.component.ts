import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {



  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];

  showLocation(residence: Residence): void {
    if (residence.address.toLowerCase() === 'inconnu') {
      alert(`L'adresse de la résidence "${residence.name}" est "inconnu".`);
    } else {
      alert(`Adresse de la résidence "${residence.name}": ${residence.address}`);
    }
  }

  favoriteResidences: Residence[] = [];

 
  likeResidence(residence: Residence): void {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
    }
    console.log(this.favoriteResidences);
    }

    filteredResidences: Residence[] = [...this.listResidences];  
  search: string = '';  

  
  filterResidences(): void {
    this.filteredResidences = this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
