export const language = (language) => {
    const account = language === "Eng" ? "Orders" : language === "Ru" ? "Заказы" : "Buyurtmalar";
    const shop = language === "Eng" ? "Shop Now" : language === "Ru" ? "Заказать" : "Xarid qilish";
    const categories = language === "Eng" ? "Categories" : language === "Ru" ? "Категории" : "Kategoriyalar";
    const title = language === "Eng" ? "Style, Comfort, Quality." : language === "Ru" ? "Вкус качества" : "Uslub, qulaylik, sifat.";


    return {
        account,
        categories,
        title,
        shop,
    }
}