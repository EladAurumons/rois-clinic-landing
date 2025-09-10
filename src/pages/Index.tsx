import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Heart, Clock, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-primary">פרופ' רואי בייגל</h1>
              <p className="text-muted-foreground">קרדיולוגיה קלינית</p>
            </div>
            <Button variant="medical" size="lg" className="hidden md:flex">
              <Phone className="w-4 h-4 ml-2" />
              לקביעת תור
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                פרופ' רואי בייגל
              </h1>
              <p className="text-xl text-primary font-semibold mb-4 whitespace-nowrap">
                מנהל המחלקה הקרדיולוגית במרכז הרפואי שיבא – תל השומר
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                ייעוץ קרדיולוגי במגוון בעיות לבביות בקליניקה פרטית
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="medical" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 ml-2" />
                  054-7655556
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Mail className="w-4 h-4 ml-2" />
                  Roy@profbeigel.com
                </Button>
              </div>

              <div className="mt-6 flex items-center justify-center lg:justify-start text-muted-foreground">
                <MapPin className="w-4 h-4 ml-2" />
                <span>הברזל 12, רמת החייל, תל אביב</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full shadow-2xl overflow-hidden">
                    <img 
                      src="/lovable-uploads/02e0cea8-a143-40ee-80df-92b0f857d300.png"
                      alt="פרופ' רואי בייגל"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">תחומי התמחות</h2>
            <p className="text-lg text-muted-foreground">מגוון רחב של שירותים קרדיולוגיים מתקדמים</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">טיפול ומניעה של התקפי לב וטרשת עורקים</h3>
                <p className="text-muted-foreground">התמחות בטיפול ומניעה של טרשת עורקים ושלל גורמי הסיכון (כולסטרול, סכרת, יתר לחץ דם) העלולים לגרום להתקפי לב</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">הדמיה לא פולשנית</h3>
                <p className="text-muted-foreground">בדיקות מתקדמות לאבחון מחלות לב ללא פעולות פולשניות</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">מחלות מסתמי הלב</h3>
                <p className="text-muted-foreground">אבחון וטיפול במחלות מסתמי הלב ואי ספיקת לב</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">אודות פרופ' רואי בייגל</h2>
          </div>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-right">
                פרופ' רואי בייגל הוא מנהל המחלקה הקרדיולוגית במרכז הרפואי שיבא – תל השומר. הוא מומחה לקרדיולוגיה קלינית ומתעסק במגוון נרחב של בעיות לב בתחומים שונים הכוללים: טיפול נמרץ לבבי והתקפי לב, הדמיה לא פולשנית, בעיות בשומני הדם וטרשת עורקים, מחלות מסתמי הלב ואי ספיקת לב
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-right mt-4">
                פרופ' בייגל הוביל יוזמות חינוכיות ומחקריות רבות במסגרת האיגוד הקרדיולוגי בישראל. בעברו גם היה יו"ר החוג לטיפול נמרץ לב באיגוד הקרדיולוגי. הוא משמש כמרצה קבוע בפקולטה לרפואה של אוניברסיטת תל אביב ונבחר שוב ושוב לרשימות הרופאים המצטיינים של מגזין פורבס
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">לקביעת תור</h2>
            <p className="text-lg text-muted-foreground">צרו קשר לתיאום פגישה בקליניקה הפרטית</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">טלפון</h3>
                <p className="text-2xl font-bold text-primary mb-2">054-7655556</p>
                <p className="text-muted-foreground">לתיאום תורים</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">דוא"ל</h3>
                <p className="text-xl font-bold text-primary mb-2">Roy@profbeigel.com</p>
                <p className="text-muted-foreground">לפניות ותיאום</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 shadow-lg">
            <CardContent className="p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">מיקום הקליניקה</h3>
              <p className="text-xl font-bold text-primary">הברזל 12, רמת החייל, תל אביב</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-2">פרופ' רואי בייגל - קרדיולוגיה קלינית</p>
          <p className="text-primary-foreground/80">מנהל המחלקה הקרדיולוגית במרכז הרפואי שיבא</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
