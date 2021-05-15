### Yapılanlar:

#### Movies Reducer'ın Yazılması : FETCH_MOVİES_ERROR

##### FETCH_MOVİES action'unu yazarken then bloğundan sonra catch bloğu içerisine console log atmıştık. Şimdi onun içini dolduracağız. Eğer url'imizde bir sorun varsa bize logger sayesinde bu log'ta gözüküyor ve içeriğine bakacak olursak error'e düşmüş ve içinde dönen değerleri görürüz. Buradan istediğimiz herhangi bir değeri ihtiyacımız halinde kullanabiliriz. Örnek:

<br/>

### const fullMoviesList = (

### <div>

### {movies.error.message ? (

### <h3>{movies.error.message}</h3>

### ) : (

### <h3>Sorun yok yola devam...</h3>

### )}

### </div>

### );
