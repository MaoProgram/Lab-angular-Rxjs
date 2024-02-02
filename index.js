import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const numerosObservable = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

numerosObservable
  .pipe(
    map(numero => (numero % 2 !== 0) ? numero : null),
  )
  .subscribe(
    numeroImpar => {
      if (numeroImpar !== null) {
        console.log(numeroImpar);
      }
    }
  )