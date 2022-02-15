First Page{
    > List Of Product Type (eg. Medicine, Healthcare Devices, Nutrition Drinks),
        > http://localhost:6702/product
        > 
    > List of product  wrt category  (eg. If medicine , the list of medicine to be displayed )
        List of product 
            > http://localhost:6702/category
            >
        List of product wrt category
            > http://localhost:6702/category?type_id=6
            >
    > Top Category
        > http://localhost:6702/category?sort_id=1
        >
}

Second Page{
    > If order medicine (the sort should be open from a to z)
    > If healthcare products (on click on filter data should be displayed wrt the filter chosen)
        Filter
            > The data to be loaded wrt category + price
                > http://localhost:6702/filter/1?lprice=1&hprice=200&category_id=1
                > 
            > The data to be loaded wrt sub category
            > The data to be loaded wrt price 
                > http://localhost:6702/filter/2?lprice=1&hprice=200
                    > low to high 
                        > http://localhost:6702/filter/1?lprice=1&hprice=200&category_id=1&sort=1
                    > high to low 
                        > http://localhost:6702/filter/1?lprice=1&hprice=200&category_id=1&sort=-1
            > pagination
                > http://localhost:6702/filter/1?category_id=1&skip=4&limit=2
                > 
}

Third Page{
    Product Details
        > http://localhost:6702/details/3
        > 

    All the products (menu)   
        > http://localhost:6702/menu/101   
}

Fourth Page{
    product on basis of user selection
        > localhost:6702/menuItem
        > 
        > body [3]
    Api to place order
        > localhost:6702/placeorder
}

Fifth Page{
    Place all orders
        > localhost:6702/placeorder
}

Update Orders   
    > localhost:6702/updateOrder/620b4170a6d255a37b47f6fa?status=success