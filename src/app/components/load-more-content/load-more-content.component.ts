import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import $ from 'jquery';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'load-more-content',
	templateUrl: './load-more-content.component.html',
	styleUrls: ['./load-more-content.component.css']
})
export class LoadMoreContentComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() id: string;
	@Input() classname: string;
	@Input() count: number;

	@ViewChild('lmc', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {
		let cln = "." + this.classname;
		const idn = "#" + this.id;
		const cnt = this.count;

		$(document).ready(function() {
			$(cln).slice(0, cnt).show();
			$(cln).slice(cnt, $(cln).length).hide();
			if ($(cln + ":hidden").length !== 0) {
				$(idn).show();
			}
			$(idn).on('click', function(e) {
				e.preventDefault();
				$(cln + ":hidden").slice(0, cnt).slideDown();
				if ($(cln + ":hidden").length === 0) {
					$(idn).fadeOut('slow');
				}
			});
		});
	}

	ngAfterViewInit(){
	}

}
