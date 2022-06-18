import { switchMap, map, concatMap, delay, tap, takeUntil, filter, last, takeLast, mergeMap, reduce } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import { range, of, Subject, interval } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'warn',
  templateUrl: './warn.component.html',
  styleUrls: ['./warn.component.scss']
})
export class WarnComponent implements OnInit {
  @Input() status: NbComponentStatus = 'danger';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.test();
    // this.getNumAns$('bdQR', 'bdQRSuccess.png').subscribe();
    // this.getNumAns$('bdQR', 'bdQRFail.png').subscribe();
    // this.getNumAns('bdNum', 'mmhg.png');
  }

  test() {
    // 0 ~ 90 %
    range(0, 10)
      .pipe(
        concatMap(percent => {
          // 跑10次，算平均
          return range(0, 30).pipe(
            concatMap(() => {
              const start = moment();
              return this.tryTempQR$(percent).pipe(
                map(() => {
                  const end = moment();
                  const needTime = Number(end.diff(start, "milliseconds"))/1000;
                  return needTime;
                })
              );
            }),
            reduce((acc, val) => [...acc, val], []),
            map(timeArray => timeArray.reduce((a, b) => a + b) / timeArray.length),
            tap(ans => console.log(percent, ans))
          )
          // const start = moment();
          // return this.tryBDNum$(percent).pipe(
          //   tap(() => {
          //     const end = moment();
          //     const needTime = Number(end.diff(start, "milliseconds"))/1000;
          //     console.log(percent, needTime)
          //   })
          // );
        }),
        reduce((acc, val) => [...acc, val], []),
        tap(ans => console.log(ans))
      )
    .subscribe();
  }

  tryBDQR$(percent) {
    const imgNameArray = [...Array(101).keys()].map(index => {
      const isFail = (index + 1) <= (percent*10);
      return isFail ? 'bdQRFail.png' : 'bdQRSuccess.png';
    });
    const endSubject$ = new Subject();
    return interval(200).pipe(
      takeUntil(endSubject$),
      mergeMap(() => {
        const randomIndex = Math.floor(Math.random()*100)+1;
        const imgName = imgNameArray[randomIndex];
        return this.getNumAns$('bdQR', imgName);
      }),
      tap((isSuccess) => {
        if (isSuccess) {
          endSubject$.next();
        }
      }),
      takeLast(1),
    );
  }

  tryBDNum$(percent) {
    const imgNameArray = [...Array(101).keys()].map(index => {
      const isFail = (index + 1) <= (percent*10);
      return isFail ? 'bdNumberFail.png' : 'bdNumberSuccess.png';
    });
    const endSubject$ = new Subject();
    return interval(200).pipe(
      takeUntil(endSubject$),
      mergeMap(() => {
        const randomIndex = Math.floor(Math.random()*100)+1;
        const imgName = imgNameArray[randomIndex];
        return this.getNumAns$('bdNum', imgName);
      }),
      tap((isSuccess) => {
        if (isSuccess) {
          endSubject$.next();
        }
      }),
      takeLast(1),
    );
  }

  tryTempQR$(percent) {
    const imgNameArray = [...Array(101).keys()].map(index => {
      const isFail = (index + 1) <= (percent*10);
      return isFail ? 'tempQRFail.jpg' : 'tempQRSuccess.jpg';
    });
    const endSubject$ = new Subject();
    return interval(200).pipe(
      takeUntil(endSubject$),
      mergeMap(() => {
        const randomIndex = Math.floor(Math.random()*100)+1;
        const imgName = imgNameArray[randomIndex];
        return this.getNumAns$('tempQR', imgName);
      }),
      tap((isSuccess) => {
        if (isSuccess) {
          endSubject$.next();
        }
      }),
      takeLast(1),
    );
  }

  tryTempNum$(percent) {
    const imgNameArray = [...Array(101).keys()].map(index => {
      const isFail = (index + 1) <= (percent*10);
      return isFail ? 'tempNumberFail.jpg' : 'tempNumberSuccess.jpg';
    });
    const endSubject$ = new Subject();
    return interval(200).pipe(
      takeUntil(endSubject$),
      mergeMap(() => {
        const randomIndex = Math.floor(Math.random()*100)+1;
        const imgName = imgNameArray[randomIndex];
        return this.getNumAns$('tempNum', imgName);
      }),
      tap((isSuccess) => {
        if (isSuccess) {
          endSubject$.next();
        }
      }),
      takeLast(1),
    );
  }

  testBDNumAns2() {
    range(0, 3).subscribe(res => console.log(res));
  }

  getNumAns$(apiPath: 'bdNum' | 'tempNum'| 'bdQR'| 'tempQR', imgName) {
    return this.http.get(`assets/test/${imgName}`, { responseType: 'blob' })
      .pipe(
        switchMap(imgData => {
          const formData = new FormData();
          formData.append("imgData", imgData, 'imgData');
          return this.http.post(`http://127.0.0.1:5000/${apiPath}`, formData)
        }),
        map((res: any) => res?.status === 'success')
      );
  }


}
