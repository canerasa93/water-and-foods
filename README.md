### Gereksinimler

- Ihytiyaç duyacağımız Prettier, Eslint ve Typescript paketlerini aşağıdaki komutları kullanarak global olarak bilgisayara yüklüyoruz.

`npm install --global prettier npm install -g eslint npm install typescript -g npm install -g babel-eslint npm install -g json-server`

- VS Code IDE'sinde code format için;\
  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) eklentisini kullanacağız.\
  [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ve\
  [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) eklentileri, geliştirme esnasında lint uyarı ve hatalarını görüntülemek için kullanılacaktır. Kullandığınız IDE'ye bu eklentileri kurmalısınız.

### yarn install  || npm install

Uygulamanın lokalde çalışması için gerekli paketlerin yüklenmesini sağlar.

## Package Scripts

Projede çalıştırılabilecek scriptler;

### `yarn dev`

Development modunda ReactJS projesini [http://localhost:3000](http://localhost:3000) üzerinde ve Mock Database için json-server'ı [http://localhost:3010](http://localhost:3010) üzerinde çalıştırır.

### `yarn mock`

Mock Database için json-server'ı [http://localhost:3010](http://localhost:3010) üzerinde çalıştırır.

### `yarn start`

`Production` modunda ReactJS projesini [http://localhost:3000](http://localhost:3000) üzerinde çalıştırır. Database i ise, production env. üzerinden gelen [https://water-and-foods-db.herokuapp.com](https://water-and-foods-db.herokuapp.com) üzerinden okur.

### `yarn lint || yarn lint:fix`

Tüm dosyalar taranır ve Eslint ile yakalanan hataları listeler veya ":fix" kodu ile otomatik fixlenebilecek hatalar fixlenir.

### `yarn format`

Tüm dosyalar taranır ve prettier ile dosyalar otomatik formatlanır.

### `yarn tsc`

Tüm dosyalar taranır ve olası Typescript hataları listelenir.

### `yarn svgr`

SVG dosyasından javascript'e çevirerek komponent olarak kullabilememizi sağlar.
"src/assets/icons" altına eklenen tüm iconları tarar ve "src/components/icons" altında js halini ekler.

`Not`: CustomIcon olarak kullanmak isterseniz, "iconList.ts" constant'ına eklemek gerekir.

### `yarn test`

Sistem üzerinde Create React App ile gelen default test'leri çalıştırır.

### `yarn run build`

`build` klasörü üzerinde uygulamanın `Production` build halini çıkartır.

### Deployed Project

App Client URL: [https://water-and-foods.herokuapp.com](https://water-and-foods.herokuapp.com/)\
App DB URL's:\
[https://water-and-foods-db.herokuapp.com/items](https://water-and-foods-db.herokuapp.com/items)\
[https://water-and-foods-db.herokuapp.com/companies](https://water-and-foods-db.herokuapp.com/companies)
