import { Component, OnInit, Inject } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ArticleSource } from '../../models/article-source';
import { ArticleService } from '../../services/article-service';
import { ViewController } from '@ionic/core';

class CheckedSource{
  public source :ArticleSource;
  public checked: boolean;
}

@Component({
  selector: 'app-sources-modal',
  templateUrl: './sources-modal.page.html',
  styleUrls: ['./sources-modal.page.scss'],
})
export class SourcesModalPage implements OnInit {

  private _checkedSources:CheckedSource[];

  get checkedSource():CheckedSource[]{
    return this._checkedSources;
  }

  get selectedSources():ArticleSource[]
  {
    let selecteds:CheckedSource[] = this.checkedSource.filter(srcCheck => srcCheck.checked);
    return selecteds.map(srcCheck => srcCheck.source);
  }

  constructor(private _params:NavParams, @Inject("article") private _articleSource: ArticleService, private _modalCtrl:ModalController) 
  { 
    let userSources:ArticleSource[] = this._params.get('sources');
    this._checkedSources = new Array();
  
    this._articleSource.getSources()
    .then(sources => {
      
      for(let currentSource of sources)
      {
        let currentCheckedSource:CheckedSource = new CheckedSource();
        
        let userContainsSource:boolean = userSources.findIndex(userSrc => userSrc.id == currentSource.id) != -1;
        
        currentCheckedSource.checked = userContainsSource;
        currentCheckedSource.source = currentSource;
        
        this._checkedSources.push(currentCheckedSource);
      }
  
    });
    
  }
  
  public toggleSourceCheck(sourceId:string)
  {
    let sourceIndex:number = this._checkedSources.findIndex(src => src.source.id == sourceId);
    let currentCheckValue:boolean = this._checkedSources[sourceIndex].checked;
    this._checkedSources[sourceIndex].checked = !currentCheckValue;
  }

  public finish(){
    this._modalCtrl.dismiss(this.selectedSources);
  }

  ngOnInit() {
    
  }

}
