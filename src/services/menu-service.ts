import { Injectable } from "@angular/core";
import { Menu, Content } from "@ionic/angular";

@Injectable()
export class MenuService{
    
    private static _menu:Menu;
    
    public setMenu(menu:Menu){
        MenuService._menu = menu;
    }

    public async toggle(){
        
        let isOpen:boolean = await MenuService._menu.isOpen();
        
        if(isOpen){
            MenuService._menu.close();
        }else{
            MenuService._menu.open();
        }
        
    }
}