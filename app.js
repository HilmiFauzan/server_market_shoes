const url = "https://gql.tokopedia.com/graphql/ShopInfoCore";
const url_target_product = "https://gql.tokopedia.com/graphql/ShopProducts";
const url_target_shop_page_get_layout_v2 = "https://gql.tokopedia.com/graphql/ShopPageGetLayoutV2";
const url_target_shop_show_case = "https://gql.tokopedia.com/graphql/ShopShowcase";

const params = [];
const data_aktif_produk = [];
const rows_data = [];
const result_data = [];
const widgets_data = [];
const shop_show_case = [];

const data_scrap_result = {
    "shop_info_data" : data_aktif_produk,
    "shop_product_data" : result_data,
    "shop_layout_data" : widgets_data,
    "shop_show_case" : shop_show_case,
}

const req_head = {
    'Authority': 'https://gql.tokopedia.com/',
    'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'X-Version': 'bcc81b6',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    "Content-type": 'application/json;',
    'Accept': '*/*',
    'Referer': 'https://www.tokopedia.com/aerostreet/product/page/1',
    'X-Source': 'tokopedia-lite',
    'X-Device': 'default_v3',
    'X-Tkpd-Lite-Service': 'zeus',
    'sec-ch-ua-platform': 'Windows',
    "Access-control-allow-origin": "*",
    "Access-control-allow-headers": "content-type",
    "Connection": "keep-alive"
};

const query_body_shop_info = {
    "operationName": "ShopInfoCore",
    "variables": {
        "id": 0,
        "domain": "aerostreet"
    },
    "query": "query ShopInfoCore($id: Int!, $domain: String) {\n  shopInfoByID(input: {shopIDs: [$id], fields: [\"active_product\", \"allow_manage_all\", \"assets\", \"core\", \"closed_info\", \"create_info\", \"favorite\", \"location\", \"status\", \"is_open\", \"other-goldos\", \"shipment\", \"shopstats\", \"shop-snippet\", \"other-shiploc\", \"shopHomeType\", \"branch-link\", \"goapotik\", \"fs_type\"], domain: $domain, source: \"shoppage\"}) {\n    result {\n      shopCore {\n        description\n        domain\n        shopID\n        name\n        tagLine\n        defaultSort\n        __typename\n      }\n      createInfo {\n        openSince\n        __typename\n      }\n      favoriteData {\n        totalFavorite\n        alreadyFavorited\n        __typename\n      }\n      activeProduct\n      shopAssets {\n        avatar\n        cover\n        __typename\n      }\n      location\n      isAllowManage\n      branchLinkDomain\n      isOpen\n      shipmentInfo {\n        isAvailable\n        image\n        name\n        product {\n          isAvailable\n          productName\n          uiHidden\n          __typename\n        }\n        __typename\n      }\n      shippingLoc {\n        districtName\n        cityName\n        __typename\n      }\n      shopStats {\n        productSold\n        totalTxSuccess\n        totalShowcase\n        __typename\n      }\n      statusInfo {\n        shopStatus\n        statusMessage\n        statusTitle\n        tickerType\n        __typename\n      }\n      closedInfo {\n        closedNote\n        until\n        reason\n        detail {\n          status\n          __typename\n        }\n        __typename\n      }\n      bbInfo {\n        bbName\n        bbDesc\n        bbNameEN\n        bbDescEN\n        __typename\n      }\n      goldOS {\n        isGold\n        isGoldBadge\n        isOfficial\n        badge\n        shopTier\n        __typename\n      }\n      shopSnippetURL\n      customSEO {\n        title\n        description\n        bottomContent\n        __typename\n      }\n      isQA\n      isGoApotik\n      partnerInfo {\n        fsType\n        __typename\n      }\n      __typename\n    }\n    error {\n      message\n      __typename\n    }\n    __typename\n  }\n}\n"
};

const query_body_shop_page_layout_2 = {
    "operationName": "ShopPageGetLayoutV2",
    "variables": {
        "shopID": "6673471",
        "districtID": "2274",
        "cityID": "176",
        "latitude": "",
        "longitude": "",
        "widgetRequest": [
            {
                "widgetID": 7975539,
                "widgetMasterID": 1,
                "widgetType": "display",
                "widgetName": "slider_banner"
            },
            {
                "widgetID": 7975537,
                "widgetMasterID": 1,
                "widgetType": "display",
                "widgetName": "slider_banner"
            },
            {
                "widgetID": 7975538,
                "widgetMasterID": 1,
                "widgetType": "display",
                "widgetName": "slider_banner"
            },
            {
                "widgetID": 7975540,
                "widgetMasterID": 8,
                "widgetType": "product",
                "widgetName": "product"
            }
        ]
    },
    "query": "fragment DisplayWidgetFrag on DisplayWidget {\n  imageUrl\n  desktopImageUrl\n  videoUrl\n  appLink\n  webLink\n  linkType\n  linkID\n  __typename\n}\n\nfragment ProductWidgetFrag on ProductWidget {\n  productID\n  name\n  imageUrl\n  productUrl\n  displayPrice\n  originalPrice\n  discountPercentage\n  isShowFreeOngkir\n  freeOngkirPromoIcon\n  recommendationType\n  isSoldOut\n  rating\n  totalReview\n  isPO\n  cashback\n  labelGroups {\n    position\n    type\n    title\n    url\n    __typename\n  }\n  __typename\n}\n\nfragment PromoWidgetFrag on PromoWidget {\n  voucherID\n  imageUrl\n  name\n  voucherType {\n    voucherType\n    identifier\n    __typename\n  }\n  voucherCode\n  amount {\n    amountType\n    amount\n    amountFormatted\n    __typename\n  }\n  minimumSpend\n  minimumSpendFormatted\n  owner {\n    ownerID\n    identifier\n    __typename\n  }\n  validThru\n  tnc\n  inUseExpiry\n  status {\n    status\n    identifier\n    __typename\n  }\n  __typename\n}\n\nfragment EtalaseWidgetFrag on EtalaseWidget {\n  imageUrl\n  desktopImageUrl\n  webLink\n  Name\n  linkID\n  __typename\n}\n\nfragment CampaignWidgetFrag on CampaignWidget {\n  campaignID\n  name\n  description\n  startDate\n  endDate\n  statusCampaign\n  timeDescription\n  timeCounter\n  totalNotify\n  totalNotifyWording\n  totalProduct\n  totalProductWording\n  backgroundGradientColor {\n    firstColor\n    secondColor\n    __typename\n  }\n  dynamicRule {\n    dynamicRoleData {\n      ruleName\n      ruleID\n      isActive\n      ruleAdditionalData\n      __typename\n    }\n    descriptionHeader\n    __typename\n  }\n  banners {\n    imageID\n    imageURL\n    bannerType\n    __typename\n  }\n  products {\n    id\n    name\n    url\n    urlApps\n    urlMobile\n    imageURL\n    price\n    countSold\n    stock\n    status\n    discountedPrice\n    discountPercentage\n    position\n    rating\n    stockWording {\n      title\n      __typename\n    }\n    hideGimmick\n    labelGroups {\n      position\n      type\n      title\n      url\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nquery ShopPageGetLayoutV2($widgetRequest: [ShopPageWidgetRequest!]!, $shopID: String!, $districtID: String, $cityID: String, $latitude: String, $longitude: String) {\n  shopPageGetLayout: shopPageGetLayoutV2(widgetRequest: $widgetRequest, shopID: $shopID, districtID: $districtID, cityID: $cityID, latitude: $latitude, longitude: $longitude) {\n    widgets {\n      widgetID\n      widgetMasterID\n      layoutOrder\n      name\n      type\n      header {\n        title\n        subtitle\n        ctaText\n        ctaLink\n        cover\n        ratio\n        isATC\n        isActive\n        etalaseID\n        isShowEtalaseName\n        __typename\n      }\n      data {\n        ...DisplayWidgetFrag\n        ...ProductWidgetFrag\n        ...PromoWidgetFrag\n        ...EtalaseWidgetFrag\n        ...CampaignWidgetFrag\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
}

const query_body_shop_showcase = {
    "operationName": "ShopShowcase",
    "variables": {
        "sid": "6673471",
        "isManageShop": false,
        "hideEmpty": true
    },
    "query": "query ShopShowcase($sid: String!, $isManageShop: Boolean, $hideEmpty: Boolean, $hideGroup: Boolean) {\n  shopShowcasesByShopID(shopId: $sid, hideNoCount: $hideEmpty, hideShowcaseGroup: $hideGroup, isOwner: $isManageShop) {\n    result {\n      id\n      title: name\n      count\n      type\n      highlighted\n      alias\n      link: uri\n      useAce\n      badge\n      __typename\n    }\n    error {\n      message\n      __typename\n    }\n    __typename\n  }\n}\n"
}


const func_post_data_shop_info = () => {
    const post_data_shop_info = fetch(url, {
        // mode: 'no-cors',
        method: 'POST',
        headers: req_head,
        body: JSON.stringify(query_body_shop_info)
    })
        .then((response) => response.json())
        .then((data) => {
            data_aktif_produk.push(data['data']['shopInfoByID']['result'][0])
        });
    return post_data_shop_info;
}

const func_post_data_produk = () => {
    const get_page = data_aktif_produk[0]['activeProduct']
    const checkModulo = get_page % 80;
    var count_page
    if (checkModulo > 0) {
        count_page = Math.floor(get_page / 80 + 1)
    }else{
        count_page = Math.floor(get_page / 80)
    }
    // console.log(count_page)

    for (let i = 1; i <= count_page; i++) {
    // for (let i = 1; i <= 3; i++) {
        var param = { "operationName": "ShopProducts", "variables": { "source": "shop", "sid": "6673471", "page": i, "perPage": 80, "etalaseId": "etalase", "sort": 1, "user_districtId": "2274", "user_cityId": "176", "user_lat": "", "user_long": "" }, "query": "query ShopProducts($sid: String!, $source: String, $page: Int, $perPage: Int, $keyword: String, $etalaseId: String, $sort: Int, $user_districtId: String, $user_cityId: String, $user_lat: String, $user_long: String) {\n  GetShopProduct(shopID: $sid, source: $source, filter: {page: $page, perPage: $perPage, fkeyword: $keyword, fmenu: $etalaseId, sort: $sort, user_districtId: $user_districtId, user_cityId: $user_cityId, user_lat: $user_lat, user_long: $user_long}) {\n    status\n    errors\n    links {\n      prev\n      next\n      __typename\n    }\n    data {\n      name\n      product_url\n      product_id\n      price {\n        text_idr\n        __typename\n      }\n      primary_image {\n        original\n        thumbnail\n        resize300\n        __typename\n      }\n      flags {\n        isSold\n        isPreorder\n        isWholesale\n        isWishlist\n        __typename\n      }\n      campaign {\n        discounted_percentage\n        original_price_fmt\n        start_date\n        end_date\n        __typename\n      }\n      label {\n        color_hex\n        content\n        __typename\n      }\n      label_groups {\n        position\n        title\n        type\n        url\n        __typename\n      }\n      badge {\n        title\n        image_url\n        __typename\n      }\n      stats {\n        reviewCount\n        rating\n        averageRating\n        __typename\n      }\n      category {\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n" };
        params.push(param)
    }
    // console.log(params);
}

const scrap_data_param = async (increase_number) => {
    // console.log(params.length)

    await fetch(url_target_product, {
        method: 'POST',
        headers: req_head,
        body: JSON.stringify(increase_number)
    })
        .then((response) => response.json())
        .then((data) => {
            var row = data['data']['GetShopProduct']['data'];
            rows_data.push(row);
            // console.log(data['data']['GetShopProduct']['data'][0]['name'])
            // console.log(data['data']['GetShopProduct']['data'][1]['name'])
            // console.log('test', increase_number)
        })
        .catch((e) => {
            console.error(e)
        });
}

const scrap_data_shop_page_layout_2 = async () => {
    let widgets_length = 1;
    for (let i = 0; i < widgets_length; i++) {
        await fetch(url_target_shop_page_get_layout_v2, {
            method: 'POST',
            headers: req_head,
            body: JSON.stringify(query_body_shop_page_layout_2)
        })
            .then((response) => response.json())
            .then((data) => {
                widgets_length = data['data']['shopPageGetLayout']['widgets'].length;
                var row = data['data']['shopPageGetLayout']['widgets'][i]['data'];
                widgets_data.push(row);
                // console.log(widgets_length)
            })
            .catch((e) => {
                console.error(e)
            });
    }
}

const scrap_data_shop_showcase = async() => {
    await fetch(url_target_shop_show_case, {
        method: 'POST',
        headers: req_head,
        body: JSON.stringify(query_body_shop_showcase)
    })
        .then((response) => response.json())
        .then((data) => {
            const list_shop_show_case = data?.['data']?.['shopShowcasesByShopID']?.['result'];
            shop_show_case.push(list_shop_show_case);
            console.log(shop_show_case)
        })
        .catch((e) => {
            console.error(e)
        });
}

const result_scrap = (col) => {
    let kolom = col + 1;
    for (let row = 0; row < rows_data[col].length; row++) {
        const name_product = rows_data[col][row]['name'];
        const img_link = rows_data[col][row]['primary_image']['original'];
        const price = rows_data[col][row]['price']['text_idr'];
        const stats_average_rating = rows_data[col][row]['stats']['averageRating'];
        const stats_review_count = rows_data[col][row]['stats']['reviewCount'];
        const product_id = rows_data[col][row]['product_id'];
        const product_url = rows_data[col][row]['product_url'];
        
        const result = {
            "name_product" : name_product, 
            "img" : img_link, 
            "price" : price, 
            "average" : stats_average_rating,
            "review_product" : stats_review_count,
            "product_id" : product_id,
            "product_url" : product_url,
        }
        result_data.push(result);
        // console.log("nomor" + row + " kolom ke " + kolom, name_product, "(" + price + ")", "[" + stats_average_rating + "]")
    }
}

checkInternet(function (isConnected) {
    if (isConnected) {
        (async (post_data_shop_info) => {
            try {
                await func_post_data_shop_info(post_data_shop_info);
                await func_post_data_produk();
                // console.log(params.length);

                // console.log(params)

                for (let col = 0; col < params.length; col++) {
                    //     console.log('test', number)
                    const increase_number = params[col]
                    await scrap_data_param(increase_number);
                    result_scrap(col);
                }
                await scrap_data_shop_page_layout_2();
                await scrap_data_shop_showcase();

                // const sort_max_min = result_data.sort((a, b) => b.review_product - a.review_product);
                console.log(data_scrap_result);
                
                // console.log(rows_data[0].length);

            } catch (error) {
                console.log("Caught error: ", error);
            }
        })();
    } else {
        console.log("No connection");
    }
});

function checkInternet(cb) {
    require('dns').lookup('google.com', function (err) {
        if (err && err.code == "ENOTFOUND") {
            cb(false);
        } else {
            cb(true);
        }
    })
}

module.exports = data_scrap_result