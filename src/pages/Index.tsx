import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [activeTab, setActiveTab] = useState<'know' | 'dontknow'>('know');

  return (
    <div className="min-h-screen bg-[#F9F9F7]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E2E2C] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-semibold">MyFinePlan</div>
          <nav className="hidden md:flex gap-6">
            <a href="#formats" className="hover:opacity-70 transition-opacity">Форматы</a>
            <a href="#catalog" className="hover:opacity-70 transition-opacity">Каталог</a>
            <a href="#reviews" className="hover:opacity-70 transition-opacity">Отзывы</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">О нас</a>
          </nav>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2E2E2C]">
            <Icon name="ShoppingCart" size={20} />
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-semibold text-[#2E2E2C] leading-tight">
              Кожаные блокноты ручной работы
            </h1>
            <p className="text-lg text-[#2E2E2C]/80 leading-relaxed">
              Создаём уникальные планеры и блокноты из натуральной кожи. Каждое изделие — это история, рассказанная руками мастера.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#2E2E2C] hover:bg-[#2E2E2C]/90 text-white">
                Выбрать блокнот
              </Button>
              <Button size="lg" variant="outline" className="border-[#2E2E2C] text-[#2E2E2C] hover:bg-[#2E2E2C] hover:text-white">
                Смотреть каталог
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/74879c91-9831-4aa7-8d2a-b5b5b5071e3e/files/4445dc42-1fd0-4ea0-8276-86bbf0dcabc4.jpg" 
              alt="Кожаный блокнот" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#ECE8E6]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-[#2E2E2C] text-center mb-12">Для кого наши блокноты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Briefcase", title: "Для бизнеса", desc: "Идеальный инструмент для встреч, планирования и заметок" },
              { icon: "Heart", title: "Для творчества", desc: "Запечатлейте идеи, зарисовки и вдохновение" },
              { icon: "Gift", title: "Для подарка", desc: "Уникальный и запоминающийся презент для близких" }
            ].map((item, i) => (
              <Card key={i} className="p-8 bg-white hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#2E2E2C] rounded-full flex items-center justify-center mb-6">
                  <Icon name={item.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-medium text-[#2E2E2C] mb-3">{item.title}</h3>
                <p className="text-[#2E2E2C]/70 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-[#2E2E2C] text-center mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Выберите формат", desc: "A5, A6 или индивидуальный размер" },
              { step: "02", title: "Выберите кожу", desc: "Из нашей палитры натуральной кожи" },
              { step: "03", title: "Добавьте детали", desc: "Гравировка, застёжка, карманы" },
              { step: "04", title: "Получите блокнот", desc: "Доставка по всей России" }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-5xl font-semibold text-[#2E2E2C]/20">{item.step}</div>
                <h3 className="text-xl font-medium text-[#2E2E2C]">{item.title}</h3>
                <p className="text-[#2E2E2C]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#ECE8E6]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold text-[#2E2E2C] text-center mb-12">Выберите свой путь</h2>
          <div className="flex gap-4 mb-8 justify-center">
            <Button 
              variant={activeTab === 'know' ? 'default' : 'outline'}
              className={activeTab === 'know' ? 'bg-[#2E2E2C] text-white' : 'border-[#2E2E2C] text-[#2E2E2C]'}
              onClick={() => setActiveTab('know')}
            >
              Я знаю, чего хочу
            </Button>
            <Button 
              variant={activeTab === 'dontknow' ? 'default' : 'outline'}
              className={activeTab === 'dontknow' ? 'bg-[#2E2E2C] text-white' : 'border-[#2E2E2C] text-[#2E2E2C]'}
              onClick={() => setActiveTab('dontknow')}
            >
              Помогите выбрать
            </Button>
          </div>
          <Card className="p-8 bg-white">
            {activeTab === 'know' ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-[#2E2E2C]">Создайте уникальный блокнот</h3>
                <p className="text-[#2E2E2C]/70 leading-relaxed">
                  Воспользуйтесь конструктором и выберите каждую деталь самостоятельно: от размера до цвета строчки.
                </p>
                <Button className="bg-[#2E2E2C] hover:bg-[#2E2E2C]/90 text-white">
                  Открыть конструктор
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-[#2E2E2C]">Готовые решения</h3>
                <p className="text-[#2E2E2C]/70 leading-relaxed">
                  Мы подобрали лучшие сочетания материалов и дизайна. Просто выберите понравившийся вариант.
                </p>
                <Button className="bg-[#2E2E2C] hover:bg-[#2E2E2C]/90 text-white">
                  Смотреть готовые блокноты
                </Button>
              </div>
            )}
          </Card>
        </div>
      </section>

      <section id="formats" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-[#2E2E2C] text-center mb-12">Форматы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "A5", size: "148 × 210 мм", desc: "Классический формат для ежедневника", popular: true },
              { name: "A6", size: "105 × 148 мм", desc: "Компактный блокнот для заметок", popular: false },
              { name: "Custom", size: "Любой размер", desc: "Индивидуальные параметры", popular: false }
            ].map((format, i) => (
              <Card key={i} className={`p-8 text-center relative ${format.popular ? 'border-2 border-[#2E2E2C]' : 'bg-white'}`}>
                {format.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2E2E2C] text-white px-4 py-1 rounded-full text-sm">
                    Популярный
                  </div>
                )}
                <div className="text-4xl font-semibold text-[#2E2E2C] mb-2">{format.name}</div>
                <div className="text-[#2E2E2C]/60 mb-4">{format.size}</div>
                <p className="text-[#2E2E2C]/70">{format.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4 bg-[#ECE8E6]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-[#2E2E2C] text-center mb-12">Готовые решения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Классик", price: "4 500 ₽", color: "Коричневый" },
              { name: "Минималист", price: "3 900 ₽", color: "Чёрный" },
              { name: "Винтаж", price: "5 200 ₽", color: "Рыжий" }
            ].map((product, i) => (
              <Card key={i} className="overflow-hidden bg-white hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-[#ECE8E6] to-[#F9F9F7]"></div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-medium text-[#2E2E2C]">{product.name}</h3>
                  <p className="text-[#2E2E2C]/60">{product.color}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-[#2E2E2C]">{product.price}</span>
                    <Button className="bg-[#2E2E2C] hover:bg-[#2E2E2C]/90 text-white">
                      В корзину
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-[#2E2E2C] text-center mb-12">Палитра кожи</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {['#8B4513', '#654321', '#2E2E2C', '#A0522D', '#D2691E', '#CD853F', '#DEB887', '#F5DEB3', '#C19A6B', '#E1C699', '#8B7355', '#704214'].map((color, i) => (
              <button 
                key={i}
                className="aspect-square rounded-lg shadow-md hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                aria-label={`Цвет ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-[#ECE8E6]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-[#2E2E2C] text-center mb-12">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна", text: "Потрясающее качество! Блокнот стал моим любимым аксессуаром", rating: 5 },
              { name: "Дмитрий", text: "Заказал в подарок — друг в восторге. Спасибо за мастерство!", rating: 5 },
              { name: "Елена", text: "Очень красивый и удобный. Рекомендую всем!", rating: 5 }
            ].map((review, i) => (
              <Card key={i} className="p-6 bg-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Icon key={j} name="Star" className="text-[#2E2E2C] fill-current" size={20} />
                  ))}
                </div>
                <p className="text-[#2E2E2C]/80 mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-medium text-[#2E2E2C]">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-semibold text-[#2E2E2C]">О мастерской</h2>
          <p className="text-lg text-[#2E2E2C]/80 leading-relaxed">
            Мы создаём кожаные изделия с 2015 года. Каждый блокнот — результат многолетнего опыта и любви к ремеслу. 
            Используем только натуральную кожу и проверенные временем техники шитья.
          </p>
          <div className="flex justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-semibold text-[#2E2E2C]">9+</div>
              <div className="text-[#2E2E2C]/60">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold text-[#2E2E2C]">2000+</div>
              <div className="text-[#2E2E2C]/60">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold text-[#2E2E2C]">100%</div>
              <div className="text-[#2E2E2C]/60">ручная работа</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#2E2E2C] text-white">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-semibold">Создайте свой идеальный блокнот</h2>
          <p className="text-xl text-white/80">
            Начните с выбора формата или готового решения
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2E2E2C]">
              Открыть конструктор
            </Button>
            <Button size="lg" className="bg-white text-[#2E2E2C] hover:bg-white/90">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-[#2E2E2C] text-white border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">MyFinePlan</h3>
              <p className="text-white/70">Кожаные блокноты ручной работы</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Каталог</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Готовые блокноты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Конструктор</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Форматы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Информация</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>info@myfineplan.ru</li>
                <li>+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
            © 2024 MyFinePlan. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
