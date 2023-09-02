export const language = (language) => {
    const question = language === "Eng" ? "If you have any question, just send us your contact details and we will contact you soon" : language === "Ru" ? "Если у вас есть какие-либо вопросы, просто пришлите нам свои контактные данные, и мы свяжемся с вами в ближайшее время." : "Agar sizda biron bir savol bo'lsa, bizga aloqa ma'lumotlaringizni yuboring va biz tez orada siz bilan bog'lanamiz";
    const askPlaceholder = language === "Eng" ? "Contact detail" : language === "Ru" ? "Контактная информация" : "Aloqa ma'lumotlari";
    const title = language === "Eng" ? "Style, Comfort, Quality." : language === "Ru" ? "Вкус качества" : "Uslub, qulaylik, sifat.";
    const ask = language === "Eng" ? "FOR ASKING QUESTION" : language === "Ru" ? "ДЛЯ ЗАДАЧИ ВОПРОСА" : "SAVOL BERISH UCHUN";
    const popular = language === "Eng" ? "Most Popular" : language === "Ru" ? "Самые популярные" : "Eng mashhur";
    const view = language === "Eng" ? "View All" : language === "Ru" ? "Посмотреть все" : "Hammasini ko'rish";
    const categories = language === "Eng" ? "Categories" : language === "Ru" ? "Категории" : "Kategoriyalar";
    const blog = language === "Eng" ? "Our Blog" : language === "Ru" ? "Наш блог" : "Bizning blogimiz";
    const content = language === "Eng" ? "Webpage" : language === "Ru" ? "Веб-страница" : "Veb sahifa";
    const shop = language === "Eng" ? "Shop Now" : language === "Ru" ? "Заказать" : "Xarid qilish";
    const buy = language === "Eng" ? "Buy Now" : language === "Ru" ? "Купить" : "Xarid qilish";
    const social = language === "Eng" ? "Socials" : language === "Ru" ? "Социальные" : "Ijtimoiy";
    const account = language === "Eng" ? "Orders" : language === "Ru" ? "Заказы" : "Buyurtmalar";
    const send = language === "Eng" ? "Send" : language === "Ru" ? "Отправить" : "Yuborish";
    const simple_blog = language === "Eng" ? "Blog" : language === "Ru" ? "Блог" : "Blog";
    const simple_popular = language === "Eng" ? "Popular" : language === "Ru" ? "Популярный" : "Ommabop";
    const catalogue = language === "Eng" ? "Catalogue" : language === "Ru" ? "Каталог" : "Katalog";
    const product = language === "Eng" ? "Product" : language === "Ru" ? "Продукт" : "Mahsulot";
    const all = language === "Eng" ? "All" : language === "Ru" ? "Все" : "Hammasi";
    const order = language === "Eng" ? "Order" : language === "Ru" ? "Заказ" : "Buyurtma";
    const shipping = language === "Eng" ? "Shipping Info" : language === "Ru" ? "Информация о доставке" : "Ma'lumot";
    const continuing = language === "Eng" ? "Continue" : language === "Ru" ? "Продолжать" : "Davom etish";
    const back = language === "Eng" ? "Back" : language === "Ru" ? "Назад" : "Orqaga";
    const items = language === "Eng" ? "items" : language === "Ru" ? "предметов" : "ta element";
    const total = language === "Eng" ? "Total" : language === "Ru" ? "Общий" : "Jami";
    const no_yet = language === "Eng" ? "There is no Product yet" : language === "Ru" ? "Товара пока нет" : "Hali mahsulot yoʻq";
    const cart = language === "Eng" ? "Your Cart" : language === "Ru" ? "Ваша корзина" : "Sizning savatingiz";
    const no_product = language === "Eng" ? "No other Product in this Category" : language === "Ru" ? "В этой категории нет другого товара" : "Ushbu turkumda boshqa mahsulot yo'q";
    const maylike = language === "Eng" ? "You may like" : language === "Ru" ? "Вам может понравиться" : "Sizga yoqishi mumkin";
    const options = language === "Eng" ? "Options" : language === "Ru" ? "Варианты" : "Variantlar";
    const color = language === "Eng" ? "Colors" : language === "Ru" ? "Цвета" : "Ranglar";
    const suchproduct = language === "Eng" ? "There is no such Product" : language === "Ru" ? "Нет такого товара" : "Bunday mahsulot yo'q";
    const add = language === "Eng" ? "Add to Card" : language === "Ru" ? "Добавить" : "Savatga qo'shing";
    const name = language === "Eng" ? "First Name" : language === "Ru" ? "Имя" : "Ism";
    const address = language === "Eng" ? "Address" : language === "Ru" ? "Адрес" : "Manzil";
    const district = language === "Eng" ? "District" : language === "Ru" ? "Округ" : "Tuman";
    const number = language === "Eng" ? "Phone Number" : language === "Ru" ? "Номер телефона" : "Telefon raqam";
    const copyright = language === "Eng" ? "copyright © #Hello World 2023 .all rights reserved" : language === "Ru" ? "© #Hello World 2023. Все права защищены." : "© #Hello World 2023 .barcha huquqlar himoyalangan";
    return {
        askPlaceholder,
        no_product,
        address,
        number,
        district,
        name,
        suchproduct,
        continuing,
        order,
        no_yet,
        items,
        back,
        total,
        cart,
        maylike,
        options,
        color,
        add,
        all,
        product,
        catalogue,
        shipping,
        categories,
        simple_blog,
        simple_popular,
        copyright,
        question,
        content,
        popular,
        account,
        social,
        title,
        send,
        shop,
        view,
        blog,
        ask,
        buy,
    }
}