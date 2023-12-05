import {Injectable} from '@angular/core';

declare var $: any, psLib: any;

@Injectable({
    providedIn: 'root'
})
export class PsLibService {

    constructor() {
    }

    reloadAll(): void {
        this.reloadDatepicker();
        this.reloadTooltip();
        this.reloadTabs();
        // this.reloadForm();
        // this.reloadCarousel();
    }

    modalShowHide(
        dest: string,               // Seletor jQuery do modal
        backdrop: boolean = false,  // Habilita ou não que o fundo não seja clicável para fechá-lo (os valores aceitos são true e false)
        keyboard: boolean = false,   // Habilita ou não a tecla <esc> para fechar o modal (os valores aceitos são true e false).
        onShow: any = null,         // Executa um comando javascript ao abrir o modal. Por exemplo: uma função.
        onHide: any = null          // Executa um comando javascript ao fechar o modal. Por exemplo: uma função.
    ): void {
        psLib.ModalShowHide(dest, backdrop, keyboard, onShow, onHide);
        this.reloadAll();
    }

    notifyShowHide(
        dest: string,               // Seletor jQuery do modal
        duration: number = 5000,
        onShow: any = null,         // Executa um comando javascript ao abrir o modal. Por exemplo: uma função.
        onHide: any = null          // Executa um comando javascript ao fechar o modal. Por exemplo: uma função.
    ): void {
        var postMsg = {};
        postMsg['message'] = "scrollTop";
        window.parent.postMessage(JSON.stringify(postMsg), "*");
        psLib.NotifyShowHide(dest, duration, onShow, onHide);
    }

    reloadDatepicker(): void {
        $('body').on('focus', '.datepicker:not(.hasDatepicker)', () => {
            $(this).datepicker();
        });

        setTimeout(() => {
            $('.datepicker').datepicker();
        }, 300);
    }

    reloadTooltip(): void {
        psLib.Tooltip($('div'));
    }

    reloadTabs(): void {
        psLib.Tabs($('.ps-tabs'));
    }

    // reloadForm(): void {
    //     psLib.FormResources($('div'));
    // }

    // reloadCarousel(): void {
    //   psLib.CarouselInit($('.ps-carousel'));
    // }
}
