export const language = (language) => {
    const question = language === "Eng" ? "If you have any question, just send us your contact details and we will contact you soon" : language === "Ru" ? "Если у вас есть какие-либо вопросы, просто пришлите нам свои контактные данные, и мы свяжемся с вами в ближайшее время." : "Agar sizda biron bir savol bo'lsa, bizga aloqa ma'lumotlaringizni yuboring va biz tez orada siz bilan bog'lanamiz";
    const copyright = language === "Eng" ? "copyright © #Hello World 2023 .all rights reserved" : language === "Ru" ? "© #Hello World 2023. Все права защищены." : "© #Hello World 2023 .barcha huquqlar himoyalangan";
    const no_product = language === "Eng" ? "No other Product in this Category" : language === "Ru" ? "В этой категории нет другого товара" : "Ushbu turkumda boshqa mahsulot yo'q";
    const product_added = language === "Eng" ? "Product is added successfully" : language === "Ru" ? "Товар успешно добавлен" : "Mahsulot muvaffaqiyatli qo'shildi";
    const deleted = language === "Eng" ? "Product is deleted successfully" : language === "Ru" ? "Товар успешно удален" : "Mahsulot muvaffaqiyatli o'chirildi";
    const suchproduct = language === "Eng" ? "There is no such Product" : language === "Ru" ? "Нет такого товара" : "Bunday mahsulot yo'q";
    const no_such_product = language === "Eng" ? "No Such Product" : language === "Ru" ? "Нет такого продукта" : "Bunday mahsulot yo'q";
    const askPlaceholder = language === "Eng" ? "Contact detail" : language === "Ru" ? "Контактная информация" : "Aloqa ma'lumotlari";
    const title = language === "Eng" ? "Style, Comfort, Quality." : language === "Ru" ? "Вкус качества" : "Uslub, qulaylik, sifat.";
    const all_orders = language === "Eng" ? "All Your Orders" : language === "Ru" ? "Все ваши заказы" : "Barcha Buyurtmalaringiz";
    const no_yet = language === "Eng" ? "There is no Product yet" : language === "Ru" ? "Товара пока нет" : "Hali mahsulot yoʻq";
    const search_product = language === "Eng" ? "Search Product" : language === "Ru" ? "Поиск продукта" : "Mahsulotni qidirish";
    const maylike = language === "Eng" ? "You may like" : language === "Ru" ? "Вам может понравиться" : "Sizga yoqishi mumkin";
    const ask = language === "Eng" ? "FOR ASKING QUESTION" : language === "Ru" ? "ДЛЯ ЗАДАЧИ ВОПРОСА" : "SAVOL BERISH UCHUN";
    const shipping = language === "Eng" ? "Shipping Info" : language === "Ru" ? "Информация о доставке" : "Ma'lumot";
    const popular = language === "Eng" ? "Most Popular" : language === "Ru" ? "Самые популярные" : "Eng mashhur";
    const number = language === "Eng" ? "Phone Number" : language === "Ru" ? "Номер телефона" : "Telefon raqam";
    const view = language === "Eng" ? "View All" : language === "Ru" ? "Посмотреть все" : "Hammasini ko'rish";
    const cart = language === "Eng" ? "Your Cart" : language === "Ru" ? "Ваша корзина" : "Sizning savatingiz";
    const categories = language === "Eng" ? "Categories" : language === "Ru" ? "Категории" : "Kategoriyalar";
    const continuing = language === "Eng" ? "Continue" : language === "Ru" ? "Продолжать" : "Davom etish";
    const description = language === "Eng" ? "Description:" : language === "Ru" ? "Описание:" : "Tavsif:";
    const simple_popular = language === "Eng" ? "Popular" : language === "Ru" ? "Популярный" : "Ommabop";
    const add = language === "Eng" ? "Add to Card" : language === "Ru" ? "Добавить" : "Savatga qo'shing";
    const blog = language === "Eng" ? "Our Blog" : language === "Ru" ? "Наш блог" : "Bizning blogimiz";
    const content = language === "Eng" ? "Webpage" : language === "Ru" ? "Веб-страница" : "Veb sahifa";
    const products = language === "Eng" ? "Products" : language === "Ru" ? "Продукты" : "Mahsulotlar";
    const shop = language === "Eng" ? "Shop Now" : language === "Ru" ? "Заказать" : "Xarid qilish";
    const catalogue = language === "Eng" ? "Catalogue" : language === "Ru" ? "Каталог" : "Katalog";
    const options = language === "Eng" ? "Options" : language === "Ru" ? "Варианты" : "Variantlar";
    const quantity = language === "Eng" ? "Quantity" : language === "Ru" ? "Количество" : "Miqdor";
    const social = language === "Eng" ? "Socials" : language === "Ru" ? "Социальные" : "Ijtimoiy";
    const account = language === "Eng" ? "Orders" : language === "Ru" ? "Заказы" : "Buyurtmalar";
    const choose_language = language === "Eng" ? "Language" : language === "Ru" ? "Язык" : "Til";
    const product = language === "Eng" ? "Product" : language === "Ru" ? "Продукт" : "Mahsulot";
    const items = language === "Eng" ? "items" : language === "Ru" ? "предметов" : "ta element";
    const buy = language === "Eng" ? "Buy Now" : language === "Ru" ? "Купить" : "Xarid qilish";
    const choose = language === "Eng" ? "Choose" : language === "Ru" ? "Выберите" : "Tanlang";
    const district = language === "Eng" ? "District" : language === "Ru" ? "Округ" : "Tuman";
    const size = language === "Eng" ? "Size" : language === "Ru" ? "Размер" : "Hajm/O'lcham";
    const send = language === "Eng" ? "Send" : language === "Ru" ? "Отправить" : "Yuborish";
    const address = language === "Eng" ? "Address" : language === "Ru" ? "Адрес" : "Manzil";
    const search = language === "Eng" ? "Search" : language === "Ru" ? "Поиск" : "Qidirish";
    const order = language === "Eng" ? "Order" : language === "Ru" ? "Заказ" : "Buyurtma";
    const simple_blog = language === "Eng" ? "Blog" : language === "Ru" ? "Блог" : "Blog";
    const color = language === "Eng" ? "Colors" : language === "Ru" ? "Цвета" : "Ranglar";
    const name = language === "Eng" ? "First Name" : language === "Ru" ? "Имя" : "Ism";
    const total = language === "Eng" ? "Total" : language === "Ru" ? "Общий" : "Jami";
    const back = language === "Eng" ? "Back" : language === "Ru" ? "Назад" : "Orqaga";
    const price = language === "Eng" ? "Price" : language === "Ru" ? "Цена" : "Narx";
    const menu = language === "Eng" ? "Menu" : language === "Ru" ? "Меню" : "Menyu";
    const all = language === "Eng" ? "All" : language === "Ru" ? "Все" : "Hammasi";


    return {
        no_such_product,
        choose_language,
        askPlaceholder,
        search_product,
        simple_popular,
        product_added,
        description,
        simple_blog,
        suchproduct,
        no_product,
        categories,
        continuing,
        all_orders,
        catalogue,
        copyright,
        shipping,
        question,
        products,
        district,
        quantity,
        product,
        content,
        popular,
        maylike,
        options,
        account,
        address,
        deleted,
        social,
        choose,
        search,
        number,
        no_yet,
        price,
        order,
        items,
        total,
        title,
        color,
        size,
        menu,
        name,
        back,
        cart,
        send,
        shop,
        view,
        blog,
        ask,
        buy,
        add,
        all,
    }
}

const districts = [
    {
        eng: [
            "Uchtepa",
            "Bektemir",
            "Mirzo-Ulugbek",
            "Mirabad",
            "Sergeli",
            "Almazar",
            "Chilanzar",
            "Shaikhontohur",
            "Yunusabad",
            "Yakkasaray",
            "Yashnabad",
            "Yangihayot",
        ],
        ru: [
            "Учтепа",
            "Бектемир",
            "Мирзо - Улугбек",
            "Мирабад",
            "Сергели",
            "Алмазар",
            "Чиланзар",
            "Шайхонтохур",
            "Юнусабад",
            "Яккасарай",
            "Яшнабад",
            "Янгихайот",
        ],
        uz: [
            "Uchtepa",
            "Bektemir",
            "Mirzo-Ulug'bek",
            "Mirobod",
            "Sergeli",
            "Olmazor",
            "Chilonzor",
            "Shayxontohur",
            "Yunusobod",
            "Yakkasaroy",
            "Yashnobod",
            "Yangihayot"
        ]
    }
]

export const districtNames = (language) => {
    if (language === "Eng") {
        return districts[0].eng
    } else if (language === "Ru") {
        return districts[0].ru
    } else {
        return districts[0].uz
    }
}