export type AuthParamList = {
    Drawer: undefined,
    PatientDrawer: undefined;
    SpecialistDrawer: undefined;
    BottomTabs: undefined;
    Home: undefined;
    Notification: undefined;
    AppinionRequest: { speciality: string};
    AppinionRequestPreview: { speciality: string, data: any};
    Tools: undefined;
    AddProducts: undefined;
    Products: undefined;
    ProductDetails: { product: {id: number;name: string;details: string;ratings: number;images: any[];speciality: string;unit: string;priceRanges: { range: string; price: string }[];reviews: { user: string; comment: string; rating: number }[];cn: string;};};
    Orders: undefined;
    Contacts: undefined;
    Chat: { contact: { id: number; name: string; lastMessage: string; lastMessageTime: string } };
    Appinions: undefined;
    Profile: undefined;
    About: undefined;
    Terms: undefined;
    PrivacyPolicy: undefined;
    Faqs: undefined;
    Pricing: undefined;
    Feedback: undefined;
    TrackSales: undefined;
    TrackTotalSales: undefined;
  };
  