import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Myconfig } from './../../_services/pb/myconfig';

interface ItemsResponse {
  status:boolean,
  message:string,
  data:any
}

interface ProductResponse {
  message:string,
  status:boolean,
  data:any,
  pagination:any,
  category:any
}

interface FiltersResponse {
  brands:any,
  families:any,
  prices:any,
  sizes:any
}

@Injectable({
	providedIn:'root'
})
export class ProductsService {
    pbApi:string;
    constructor( private config: Myconfig,  private http: HttpClient ) {
        this.pbApi = config.apiEndPoint;
		//console.log("product services called");
    }
    getStripMessage(){
        return this.http.get<ItemsResponse>(this.pbApi+'products/get-strip-message');
    }

    getOfferProducts(prms){
        return this.http.get<ItemsResponse>(this.pbApi+'products/get-offer-products', {params:prms});
    }

    getSkuProducts(prms){
        return this.http.get<ItemsResponse>(this.pbApi+'products/get-sku-products', {params:prms});
    }

    getProducts(prms){
        return this.http.get<ProductResponse>(this.pbApi+'products/get-products', {params:prms});
    }

    getFilters(){
        return this.http.get<FiltersResponse>(this.pbApi+'products/get-filters', {});
    }

    getCategoryBrands(prms){
        return this.http.get<ItemsResponse>(this.pbApi+'products/get-brands-by-category', {params:prms});
    }

    getFilterProducts(prms){
        return this.http.get<ItemsResponse>(this.pbApi+'products/get-filter-products', {params:prms});
    }

    getMoreProducts(prms){
        return this.http.get(this.pbApi+'products/get-more-products', {params:prms});
    }
	
    getStoreOffer(prms, segmentPath=''){
        return this.http.get<ItemsResponse>(this.pbApi+'products/store-offer/'+segmentPath, {params:prms});
    }

	getLaunchOffer(prms){
        return this.http.get<ProductResponse>(this.pbApi+'products/get-launch-offer', {params:prms});
    }

    getPages(prms){
      return this.http.get<ProductResponse>(this.pbApi+'products/get-pages', {params:prms});
    }

    getDetails(prms){
      return this.http.get<ProductResponse>(this.pbApi+'products/get-details', {params:prms});
    }

    getProductReviews(productId, page){
		let prms = new HttpParams();
		prms = prms.append('productId', productId);
		prms = prms.append('page', page);
		return this.http.get<ProductResponse>(this.pbApi+'products/get-reviews', {params:prms});
    }

    getSuggestion(item){
		let prms = new HttpParams();
		prms = prms.append('searchkeyword', item);
		return this.http.get<ProductResponse>(this.pbApi+'products/get-suggestion', {params:prms});
	}

	notifyMe(formData){
		return this.http.post<ItemsResponse>(this.pbApi+'products/notify-me', JSON.stringify(formData), {});
	}
	
    getTest(){
      return this.http.get<ProductResponse>('http://localhost/blog/api/products/get-details?key=100-ml-ca-classic-woman-perfume&userId=16597');
    }

}
