'use strict';
(self.webpackChunkwww = self.webpackChunkwww || []).push([
  [870],
  {
    2870: (b, Z, o) => {
      o.d(Z, { u: () => T });
      var n = o(6962),
        A = o(7579),
        _ = o(9300),
        g = o(2722),
        s = o(4006),
        f = o(2976),
        e = o(4650),
        m = o(7355),
        h = o(384),
        d = o(9154),
        u = o(900),
        c = o(6895),
        l = o(4700),
        v = o(236),
        O = o(9611),
        q = o(3416);
      const M = ['captchaRef'];
      function I(i, t) {
        if (1 & i) {
          const a = e.EpF();
          e.TgZ(0, 'div', 19)(1, 're-captcha', 20, 21),
            e.NdJ('resolved', function () {
              e.CHM(a);
              const p = e.oxw();
              return e.KtG(p.submit());
            }),
            e.qZA()();
        }
      }
      class x {
        constructor(t, a, r, p, C) {
          (this.modal = t),
            (this.cdr = a),
            (this.authService = r),
            (this.toast = p),
            (this.app = C),
            (this.form = new s.cw({
              email: new s.NI(null, [
                s.kI.required,
                s.kI.email,
                s.kI.minLength(6),
                s.kI.maxLength(64),
              ]),
              captcha: new s.NI(null),
            })),
            (this.formBusy = !1),
            (this.captchaRequired = !1);
          const k = this.app.config.captcha;
          this.captchaRequired = k.status && k.reset;
        }
        close() {
          this.modal.hide();
        }
        submit() {
          if (!this.form.invalid && !this.formBusy)
            return this.reCaptcha && !this.form.value.captcha
              ? this.reCaptcha.execute()
              : ((this.formBusy = !0),
                void this.authService.doReset(this.form.value).subscribe({
                  error: () => this.onSubmitError(),
                  complete: () => this.onSubmitError(),
                  next: (a) => {
                    'success' === a.state &&
                      (this.close(), this.toast.info('msg.004'));
                  },
                }));
        }
        onSubmitError() {
          this.reCaptcha && this.reCaptcha.reset(),
            (this.formBusy = !1),
            this.cdr.markForCheck();
        }
      }
      (x.ɵfac = function (t) {
        return new (t || x)(
          e.Y36(m.Z),
          e.Y36(e.sBO),
          e.Y36(h.e),
          e.Y36(d.k),
          e.Y36(u.z)
        );
      }),
        (x.ɵcmp = e.Xpm({
          type: x,
          selectors: [['ng-component']],
          viewQuery: function (t, a) {
            if ((1 & t && e.Gf(M, 5), 2 & t)) {
              let r;
              e.iGM((r = e.CRH())) && (a.reCaptcha = r.first);
            }
          },
          decls: 33,
          vars: 22,
          consts: [
            [
              'tabindex',
              '-1',
              1,
              'modal',
              'active',
              'animate__animated',
              'animate__faster',
              'animate__fadeIn',
            ],
            [1, 'modal-wrap'],
            [1, 'modal-box', 'modal-box_end'],
            [1, 'modal-form', 3, 'formGroup', 'ngSubmit'],
            [3, 'disabled'],
            [1, 'cont-title'],
            [1, 'cont-input__title'],
            [1, 'cont-input'],
            [
              'type',
              'email',
              'formControlName',
              'email',
              'maxlength',
              '64',
              'inputValidation',
              '',
              3,
              'placeholder',
            ],
            ['type', 'submit', 1, 'm-btn', 3, 'disabled'],
            ['class', 'mt-5', 4, 'ngIf'],
            [1, 'modal-info'],
            [1, 'modal-img'],
            [1, 'modal-close', 3, 'click'],
            [0, 'xlink', 'href', '/assets/img/sprite.svg#close'],
            [1, 'm-logo'],
            ['src', '/assets/img/logo-2.svg', 'alt', ''],
            [1, 'modal-img__wrap'],
            ['src', '/assets/img/sign-bg.webp', 'alt', ''],
            [1, 'mt-5'],
            [
              'formControlName',
              'captcha',
              'badge',
              'inline',
              'theme',
              'dark',
              3,
              'resolved',
            ],
            ['captchaRef', 'reCaptcha'],
          ],
          template: function (t, a) {
            1 & t &&
              (e.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'div', 2)(3, 'form', 3),
              e.NdJ('ngSubmit', function () {
                return a.submit();
              }),
              e.TgZ(4, 'fieldset', 4)(5, 'div', 5),
              e._uU(6),
              e.ALo(7, 'translate'),
              e.qZA(),
              e.TgZ(8, 'div', 6),
              e._uU(9),
              e.ALo(10, 'translate'),
              e.qZA(),
              e.TgZ(11, 'label', 7),
              e._UZ(12, 'input', 8),
              e.ALo(13, 'translate'),
              e.qZA(),
              e.TgZ(14, 'button', 9),
              e._uU(15),
              e.ALo(16, 'translate'),
              e.qZA(),
              e.YNc(17, I, 3, 0, 'div', 10),
              e.TgZ(18, 'div', 11)(19, 'h3'),
              e._uU(20),
              e.ALo(21, 'translate'),
              e.qZA(),
              e.TgZ(22, 'p'),
              e._uU(23),
              e.ALo(24, 'translate'),
              e.qZA()()()(),
              e.TgZ(25, 'div', 12)(26, 'div', 13),
              e.NdJ('click', function () {
                return a.close();
              }),
              e.O4$(),
              e.TgZ(27, 'svg'),
              e._UZ(28, 'use', 14),
              e.qZA()(),
              e.kcU(),
              e.TgZ(29, 'div', 15),
              e._UZ(30, 'img', 16),
              e.qZA(),
              e.TgZ(31, 'div', 17),
              e._UZ(32, 'img', 18),
              e.qZA()()()()()),
              2 & t &&
                (e.xp6(3),
                e.Q6J('formGroup', a.form),
                e.xp6(1),
                e.Q6J('disabled', a.formBusy),
                e.xp6(2),
                e.Oqu(e.lcZ(7, 10, 'reset.page.title')),
                e.xp6(3),
                e.Oqu(e.lcZ(10, 12, 'reset.email.0')),
                e.xp6(3),
                e.s9C('placeholder', e.lcZ(13, 14, 'reset.email.1')),
                e.xp6(2),
                e.Q6J('disabled', a.form.invalid || a.formBusy),
                e.xp6(1),
                e.Oqu(e.lcZ(16, 16, 'reset.btn')),
                e.xp6(2),
                e.Q6J('ngIf', a.captchaRequired),
                e.xp6(3),
                e.hij('', e.lcZ(21, 18, 'reset.hint.0'), ':'),
                e.xp6(3),
                e.Oqu(e.lcZ(24, 20, 'reset.hint.1')));
          },
          dependencies: [
            c.O5,
            s._Y,
            s.Fj,
            s.JJ,
            s.JL,
            s.nD,
            s.sg,
            s.u,
            l.wT,
            l.Vd,
            v.f,
            O.$,
            q.X$,
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
      const F = ['captchaRef'];
      function N(i, t) {
        1 & i &&
          (e.ynx(0),
          e.TgZ(1, 'div', 6),
          e._uU(2),
          e.ALo(3, 'translate'),
          e.qZA(),
          e.TgZ(4, 'label', 7),
          e._UZ(5, 'input', 21),
          e.ALo(6, 'translate'),
          e.qZA(),
          e.BQk()),
          2 & i &&
            (e.xp6(2),
            e.Oqu(e.lcZ(3, 2, 'signin.otp.0')),
            e.xp6(3),
            e.s9C('placeholder', e.lcZ(6, 4, 'signin.otp.1')));
      }
      function S(i, t) {
        if (1 & i) {
          const a = e.EpF();
          e.TgZ(0, 'div', 22)(1, 're-captcha', 23, 24),
            e.NdJ('resolved', function () {
              e.CHM(a);
              const p = e.oxw();
              return e.KtG(p.submit());
            }),
            e.qZA()();
        }
      }
      class L {
        constructor(t, a, r, p, C, k) {
          (this.app = t),
            (this.modal = a),
            (this.authService = r),
            (this.cdr = p),
            (this.toast = C),
            (this.router = k),
            (this.form = new s.cw({
              login: new s.NI(null, [
                s.kI.required,
                s.kI.minLength(3),
                s.kI.maxLength(64),
              ]),
              password: new s.NI(null, [
                s.kI.required,
                s.kI.minLength(6),
                s.kI.maxLength(32),
              ]),
              otp: new s.NI(null, [
                s.kI.minLength(6),
                s.kI.maxLength(6),
                s.kI.pattern(f.l.PATTERN.INTEGER),
              ]),
              captcha: new s.NI(null),
            })),
            (this.formBusy = !1),
            (this.captchaRequired = !1),
            (this.otpRequired = !1);
          const U = this.app.config.captcha;
          this.captchaRequired = U.status && U.signin;
        }
        close() {
          this.modal.hide();
        }
        showReset() {
          this.modal.hide(),
            !this.app.isLogged &&
              setTimeout(() => {
                this.modal.show(x);
              }, 30);
        }
        submit() {
          if (this.form.invalid || this.formBusy) return;
          const t = this.form.value;
          if (this.reCaptcha && !t.captcha) return this.reCaptcha.execute();
          (this.formBusy = !0),
            this.authService.doSignin(t).subscribe({
              error: () => this.onSubmitError(),
              complete: () => this.onSubmitError(),
              next: (a) => {
                'check-otp' === a.state && this.onSigninCheck(),
                  'success' === a.state &&
                    a.user &&
                    this.onSigninSuccess(a.user);
              },
            });
        }
        onSigninCheck() {
          const t = this.form.get('otp');
          t.addValidators([s.kI.required]),
            t.updateValueAndValidity(),
            this.reCaptcha && this.reCaptcha.reset(),
            (this.formBusy = !1),
            (this.otpRequired = !0),
            this.cdr.markForCheck(),
            this.toast.info('msg.003');
        }
        onSigninSuccess(t) {
          this.app.setConfig({ isLogged: !0, isGuest: !1 }),
            this.app.setUser(t),
            this.router.navigate(['account']).then();
        }
        onSubmitError() {
          this.reCaptcha && this.reCaptcha.reset(),
            (this.formBusy = !1),
            this.cdr.markForCheck();
        }
      }
      (L.ɵfac = function (t) {
        return new (t || L)(
          e.Y36(u.z),
          e.Y36(m.Z),
          e.Y36(h.e),
          e.Y36(e.sBO),
          e.Y36(d.k),
          e.Y36(n.F0)
        );
      }),
        (L.ɵcmp = e.Xpm({
          type: L,
          selectors: [['ng-component']],
          viewQuery: function (t, a) {
            if ((1 & t && e.Gf(F, 5), 2 & t)) {
              let r;
              e.iGM((r = e.CRH())) && (a.reCaptcha = r.first);
            }
          },
          decls: 36,
          vars: 28,
          consts: [
            [
              1,
              'modal',
              'active',
              'animate__animated',
              'animate__faster',
              'animate__fadeIn',
            ],
            [1, 'modal-wrap'],
            [1, 'modal-box'],
            [1, 'modal-form', 3, 'formGroup', 'ngSubmit'],
            [3, 'disabled'],
            [1, 'cont-title'],
            [1, 'cont-input__title'],
            [1, 'cont-input'],
            [
              'type',
              'text',
              'formControlName',
              'login',
              'maxlength',
              '64',
              'inputValidation',
              '',
              3,
              'placeholder',
              'readonly',
            ],
            ['href', 'javascript:void(0)', 3, 'click'],
            [
              'type',
              'password',
              'formControlName',
              'password',
              'maxlength',
              '32',
              'inputValidation',
              '',
              3,
              'placeholder',
              'readonly',
            ],
            [4, 'ngIf'],
            ['type', 'submit', 1, 'm-btn', 3, 'disabled'],
            ['class', 'mt-5', 4, 'ngIf'],
            [1, 'modal-img'],
            [1, 'modal-close', 3, 'click'],
            [0, 'xlink', 'href', '/assets/img/sprite.svg#close'],
            [1, 'm-logo'],
            ['src', '/assets/img/logo-2.svg', 'alt', ''],
            [1, 'modal-img__wrap'],
            ['src', '/assets/img/sign-bg.webp', 'alt', ''],
            [
              'type',
              'text',
              'formControlName',
              'otp',
              'maxlength',
              '6',
              'inputValidation',
              '',
              3,
              'placeholder',
            ],
            [1, 'mt-5'],
            [
              'formControlName',
              'captcha',
              'badge',
              'inline',
              'theme',
              'dark',
              3,
              'resolved',
            ],
            ['captchaRef', 'reCaptcha'],
          ],
          template: function (t, a) {
            1 & t &&
              (e.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'div', 2)(3, 'form', 3),
              e.NdJ('ngSubmit', function () {
                return a.submit();
              }),
              e.TgZ(4, 'fieldset', 4)(5, 'div', 5),
              e._uU(6),
              e.ALo(7, 'translate'),
              e.qZA(),
              e.TgZ(8, 'div', 6),
              e._uU(9),
              e.ALo(10, 'translate'),
              e.qZA(),
              e.TgZ(11, 'label', 7),
              e._UZ(12, 'input', 8),
              e.ALo(13, 'translate'),
              e.qZA(),
              e.TgZ(14, 'div', 6),
              e._uU(15),
              e.ALo(16, 'translate'),
              e.TgZ(17, 'a', 9),
              e.NdJ('click', function () {
                return a.showReset();
              }),
              e._uU(18),
              e.ALo(19, 'translate'),
              e.qZA()(),
              e.TgZ(20, 'label', 7),
              e._UZ(21, 'input', 10),
              e.ALo(22, 'translate'),
              e.qZA(),
              e.YNc(23, N, 7, 6, 'ng-container', 11),
              e.TgZ(24, 'button', 12),
              e._uU(25),
              e.ALo(26, 'translate'),
              e.qZA(),
              e.YNc(27, S, 3, 0, 'div', 13),
              e.qZA()(),
              e.TgZ(28, 'div', 14)(29, 'div', 15),
              e.NdJ('click', function () {
                return a.close();
              }),
              e.O4$(),
              e.TgZ(30, 'svg'),
              e._UZ(31, 'use', 16),
              e.qZA()(),
              e.kcU(),
              e.TgZ(32, 'div', 17),
              e._UZ(33, 'img', 18),
              e.qZA(),
              e.TgZ(34, 'div', 19),
              e._UZ(35, 'img', 20),
              e.qZA()()()()()),
              2 & t &&
                (e.xp6(3),
                e.Q6J('formGroup', a.form),
                e.xp6(1),
                e.Q6J('disabled', a.formBusy),
                e.xp6(2),
                e.Oqu(e.lcZ(7, 14, 'signin.page.title')),
                e.xp6(3),
                e.Oqu(e.lcZ(10, 16, 'signin.username.0')),
                e.xp6(3),
                e.s9C('placeholder', e.lcZ(13, 18, 'signin.username.1')),
                e.Q6J('readonly', a.otpRequired),
                e.xp6(3),
                e.hij('', e.lcZ(16, 20, 'signin.password.0'), ' '),
                e.xp6(3),
                e.Oqu(e.lcZ(19, 22, 'signin.password.1')),
                e.xp6(3),
                e.s9C('placeholder', e.lcZ(22, 24, 'signin.password.2')),
                e.Q6J('readonly', a.otpRequired),
                e.xp6(2),
                e.Q6J('ngIf', a.otpRequired),
                e.xp6(1),
                e.Q6J('disabled', a.form.invalid || a.formBusy),
                e.xp6(1),
                e.Oqu(e.lcZ(26, 26, 'signin.btn')),
                e.xp6(2),
                e.Q6J('ngIf', a.captchaRequired));
          },
          dependencies: [
            c.O5,
            s._Y,
            s.Fj,
            s.JJ,
            s.JL,
            s.nD,
            s.sg,
            s.u,
            l.wT,
            l.Vd,
            v.f,
            O.$,
            q.X$,
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
      var w = o(1146),
        J = o(6009),
        R = o(9418),
        Q = o(1104),
        E = o(832),
        D = o(126),
        Y = o(5877),
        B = o(5290),
        $ = o(4953);
      const P = ['submenuRef'];
      function j(i, t) {
        1 & i && e._UZ(0, 'app-user-widget');
      }
      function G(i, t) {
        1 & i && (e.TgZ(0, 'a', 43), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & i && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'home.menu.dashboard')));
      }
      function H(i, t) {
        1 & i && (e.TgZ(0, 'a', 44), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & i && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'events.page.link')));
      }
      function K(i, t) {
        if (1 & i) {
          const a = e.EpF();
          e.ynx(0),
            e.TgZ(1, 'a', 45),
            e.NdJ('click', function () {
              e.CHM(a);
              const p = e.oxw(3);
              return e.KtG(p.showSignin());
            }),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.qZA(),
            e.TgZ(4, 'a', 46),
            e._uU(5),
            e.ALo(6, 'translate'),
            e.qZA(),
            e.BQk();
        }
        2 & i &&
          (e.xp6(2),
          e.Oqu(e.lcZ(3, 2, 'signin.page.link')),
          e.xp6(3),
          e.Oqu(e.lcZ(6, 4, 'signup.page.link')));
      }
      const y = function () {
        return { exact: !0 };
      };
      function V(i, t) {
        if (
          (1 & i &&
            (e.TgZ(0, 'div', 30)(1, 'div', 31)(2, 'div', 32)(3, 'div', 5),
            e.YNc(4, j, 1, 0, 'app-user-widget', 33),
            e.YNc(5, G, 3, 3, 'a', 34),
            e.TgZ(6, 'div', 35)(7, 'a', 19),
            e._uU(8),
            e.ALo(9, 'translate'),
            e.qZA(),
            e.TgZ(10, 'a', 36),
            e._uU(11),
            e.ALo(12, 'translate'),
            e.qZA(),
            e.TgZ(13, 'a', 37),
            e._uU(14),
            e.ALo(15, 'translate'),
            e.qZA(),
            e.TgZ(16, 'a', 38),
            e._uU(17),
            e.ALo(18, 'translate'),
            e.qZA(),
            e.YNc(19, H, 3, 3, 'a', 23),
            e.TgZ(20, 'a', 24),
            e._uU(21),
            e.ALo(22, 'translate'),
            e.qZA(),
            e.TgZ(23, 'a', 39),
            e._uU(24),
            e.ALo(25, 'translate'),
            e.qZA(),
            e.TgZ(26, 'a', 25),
            e._uU(27),
            e.ALo(28, 'translate'),
            e.qZA(),
            e.TgZ(29, 'a', 40),
            e._uU(30),
            e.ALo(31, 'translate'),
            e.qZA()(),
            e.YNc(32, K, 7, 6, 'ng-container', 33),
            e._UZ(33, 'app-socials', 41),
            e.TgZ(34, 'div', 42),
            e._UZ(35, 'app-company-data'),
            e.qZA()()()()()),
          2 & i)
        ) {
          const a = e.oxw(2);
          e.ekj('active', a.app.burgerState),
            e.xp6(4),
            e.Q6J('ngIf', a.app.isLogged),
            e.xp6(1),
            e.Q6J('ngIf', a.app.isLogged),
            e.xp6(2),
            e.Q6J('routerLinkActiveOptions', e.DdM(31, y)),
            e.xp6(1),
            e.Oqu(e.lcZ(9, 15, 'home.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(12, 17, 'about.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(15, 19, 'offer.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(18, 21, 'affiliate.page.link')),
            e.xp6(2),
            e.Q6J('ngIf', !1),
            e.xp6(2),
            e.Oqu(e.lcZ(22, 23, 'media.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(25, 25, 'faq.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(28, 27, 'contacts.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(31, 29, 'terms.page.link')),
            e.xp6(2),
            e.Q6J('ngIf', a.app.isGuest);
        }
      }
      function W(i, t) {
        1 & i && (e.TgZ(0, 'a', 44), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & i && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'events.page.link')));
      }
      function X(i, t) {
        1 & i &&
          (e.TgZ(0, 'div', 47)(1, 'a', 48),
          e._uU(2),
          e.ALo(3, 'translate'),
          e.qZA()()),
          2 & i && (e.xp6(2), e.Oqu(e.lcZ(3, 1, 'home.menu.dashboard')));
      }
      function z(i, t) {
        if (1 & i) {
          const a = e.EpF();
          e.TgZ(0, 'div', 49)(1, 'a', 50),
            e.NdJ('click', function () {
              e.CHM(a);
              const p = e.oxw(2);
              return e.KtG(p.showSignin());
            }),
            e._uU(2),
            e.ALo(3, 'translate'),
            e.qZA(),
            e.TgZ(4, 'a', 51),
            e._uU(5),
            e.ALo(6, 'translate'),
            e.qZA()();
        }
        2 & i &&
          (e.xp6(2),
          e.Oqu(e.lcZ(3, 2, 'signin.page.link')),
          e.xp6(3),
          e.Oqu(e.lcZ(6, 4, 'signup.page.link')));
      }
      function ee(i, t) {
        if (
          (1 & i &&
            (e.TgZ(0, 'a', 71), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & i)
        ) {
          const a = e.oxw().ngLet;
          e.Q6J('href', a.map, e.LSH),
            e.xp6(1),
            e.Oqu(e.lcZ(2, 2, 'footer.map'));
        }
      }
      function te(i, t) {
        if (
          (1 & i &&
            (e.TgZ(0, 'div', 68),
            e._UZ(1, 'img', 69),
            e.YNc(2, ee, 3, 4, 'a', 70),
            e.qZA()),
          2 & i)
        ) {
          const a = t.ngLet;
          e.Q6J('timelapse', 'footer-map'), e.xp6(2), e.Q6J('ngIf', a.map);
        }
      }
      function ae(i, t) {
        1 & i && (e.TgZ(0, 'a', 44), e._uU(1), e.ALo(2, 'translate'), e.qZA()),
          2 & i && (e.xp6(1), e.Oqu(e.lcZ(2, 1, 'events.page.link')));
      }
      const ie = function () {
        return { year: 2023 };
      };
      function ne(i, t) {
        if (
          (1 & i &&
            (e.TgZ(0, 'footer', 52)(1, 'div', 5)(2, 'div', 53)(3, 'div', 54)(
              4,
              'a',
              55
            ),
            e._UZ(5, 'img', 56),
            e.qZA(),
            e.TgZ(6, 'div', 57)(7, 'div', 58),
            e._UZ(8, 'app-company-data'),
            e.qZA()()(),
            e.TgZ(9, 'div', 59),
            e._UZ(10, 'app-language'),
            e.qZA()(),
            e.TgZ(11, 'div', 53)(12, 'div', 60)(13, 'div', 61)(14, 'div', 58),
            e._UZ(15, 'app-company-data'),
            e.qZA()(),
            e.YNc(16, te, 3, 2, 'div', 62),
            e.qZA(),
            e.TgZ(17, 'div', 60)(18, 'div', 53)(19, 'div', 63)(20, 'div', 64)(
              21,
              'a',
              19
            ),
            e._uU(22),
            e.ALo(23, 'translate'),
            e.qZA(),
            e.TgZ(24, 'a', 20),
            e._uU(25),
            e.ALo(26, 'translate'),
            e.qZA(),
            e.TgZ(27, 'a', 37),
            e._uU(28),
            e.ALo(29, 'translate'),
            e.qZA(),
            e.TgZ(30, 'a', 38),
            e._uU(31),
            e.ALo(32, 'translate'),
            e.qZA(),
            e.YNc(33, ae, 3, 3, 'a', 23),
            e.qZA()(),
            e.TgZ(34, 'div', 65)(35, 'div', 64)(36, 'a', 24),
            e._uU(37),
            e.ALo(38, 'translate'),
            e.qZA(),
            e.TgZ(39, 'a', 39),
            e._uU(40),
            e.ALo(41, 'translate'),
            e.qZA(),
            e.TgZ(42, 'a', 25),
            e._uU(43),
            e.ALo(44, 'translate'),
            e.qZA(),
            e.TgZ(45, 'a', 40),
            e._uU(46),
            e.ALo(47, 'translate'),
            e.qZA()()()(),
            e.TgZ(48, 'div', 66),
            e._uU(49),
            e.ALo(50, 'translate'),
            e.qZA()()(),
            e._UZ(51, 'app-footer-socials')(52, 'div', 67),
            e.ALo(53, 'translate'),
            e.qZA()()),
          2 & i)
        ) {
          const a = e.oxw(2);
          e.xp6(16),
            e.Q6J('ngLet', a.app.company),
            e.xp6(5),
            e.Q6J('routerLinkActiveOptions', e.DdM(34, y)),
            e.xp6(1),
            e.Oqu(e.lcZ(23, 13, 'home.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(26, 15, 'about.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(29, 17, 'offer.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(32, 19, 'affiliate.page.link')),
            e.xp6(2),
            e.Q6J('ngIf', !1),
            e.xp6(4),
            e.Oqu(e.lcZ(38, 21, 'media.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(41, 23, 'faq.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(44, 25, 'contacts.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(47, 27, 'terms.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(50, 29, 'footer.text')),
            e.xp6(3),
            e.Q6J(
              'innerHTML',
              e.xi3(53, 31, 'footer.copyright', e.DdM(35, ie)),
              e.oJD
            );
        }
      }
      const oe = function () {
        return ['/offer', '/affiliate_program'];
      };
      function se(i, t) {
        if (1 & i) {
          const a = e.EpF();
          e.TgZ(0, 'div', 1),
            e.YNc(1, V, 36, 32, 'div', 2),
            e.TgZ(2, 'header', 3)(3, 'div', 4)(4, 'div', 5)(5, 'div', 6)(
              6,
              'a',
              7
            )(7, 'div', 8),
            e._UZ(8, 'img', 9),
            e.qZA(),
            e.TgZ(9, 'h3'),
            e._uU(10),
            e.ALo(11, 'translate'),
            e.qZA(),
            e.TgZ(12, 'p'),
            e._uU(13),
            e.ALo(14, 'translate'),
            e.qZA()(),
            e.TgZ(15, 'a', 10)(16, 'div', 8),
            e._UZ(17, 'img', 9),
            e.qZA(),
            e.TgZ(18, 'h3'),
            e._uU(19),
            e.ALo(20, 'translate'),
            e.qZA(),
            e.TgZ(21, 'p'),
            e._uU(22),
            e.ALo(23, 'translate'),
            e.qZA()()(),
            e.TgZ(24, 'div', 11)(25, 'div', 12)(26, 'div', 13),
            e.NdJ('click', function () {
              e.CHM(a);
              const p = e.oxw();
              return e.KtG(p.app.toggleBurger());
            }),
            e._UZ(27, 'span'),
            e.qZA(),
            e.TgZ(28, 'a', 14),
            e._UZ(29, 'img', 15),
            e.qZA()(),
            e.TgZ(30, 'div', 16)(31, 'div', 17)(32, 'div', 18)(33, 'a', 19),
            e._uU(34),
            e.ALo(35, 'translate'),
            e.qZA(),
            e.TgZ(36, 'a', 20),
            e._uU(37),
            e.ALo(38, 'translate'),
            e.qZA(),
            e.TgZ(39, 'a', 21, 22),
            e.NdJ('click', function () {
              e.CHM(a);
              const p = e.oxw();
              return e.KtG(p.toggleSubMenu());
            }),
            e.ALo(41, 'inArray'),
            e._uU(42),
            e.ALo(43, 'translate'),
            e.qZA(),
            e.YNc(44, W, 3, 3, 'a', 23),
            e.TgZ(45, 'a', 24),
            e._uU(46),
            e.ALo(47, 'translate'),
            e.qZA(),
            e.TgZ(48, 'a', 25),
            e._uU(49),
            e.ALo(50, 'translate'),
            e.qZA()(),
            e.ynx(51, 26),
            e.YNc(52, X, 4, 3, 'div', 27),
            e.YNc(53, z, 7, 6, 'div', 28),
            e.BQk(),
            e.qZA(),
            e._UZ(54, 'app-language'),
            e.qZA()()()()(),
            e._UZ(55, 'router-outlet'),
            e.YNc(56, ne, 54, 36, 'footer', 29),
            e.qZA();
        }
        if (2 & i) {
          const a = t.ngLet,
            r = e.oxw();
          e.xp6(1),
            e.Q6J('ngIf', !a.isDesktop),
            e.xp6(4),
            e.ekj('active', r.subMenu),
            e.xp6(5),
            e.Oqu(e.lcZ(11, 22, 'home.menu.offer.1')),
            e.xp6(3),
            e.Oqu(e.lcZ(14, 24, 'home.menu.offer.2')),
            e.xp6(6),
            e.Oqu(e.lcZ(20, 26, 'home.menu.affiliate.1')),
            e.xp6(3),
            e.Oqu(e.lcZ(23, 28, 'home.menu.affiliate.2')),
            e.xp6(4),
            e.ekj('active', r.app.burgerState),
            e.xp6(7),
            e.Q6J('routerLinkActiveOptions', e.DdM(43, y)),
            e.xp6(1),
            e.Oqu(e.lcZ(35, 30, 'home.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(38, 32, 'about.page.link')),
            e.xp6(2),
            e.ekj(
              'active',
              r.subMenu || e.xi3(41, 34, r.urlPath, e.DdM(44, oe))
            ),
            e.xp6(3),
            e.Oqu(e.lcZ(43, 37, 'home.menu.programs')),
            e.xp6(2),
            e.Q6J('ngIf', !1),
            e.xp6(2),
            e.Oqu(e.lcZ(47, 39, 'media.page.link')),
            e.xp6(3),
            e.Oqu(e.lcZ(50, 41, 'contacts.page.link')),
            e.xp6(2),
            e.Q6J('ngSwitch', r.app.isLogged),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !0),
            e.xp6(1),
            e.Q6J('ngSwitchCase', !1),
            e.xp6(3),
            e.Q6J('ngIf', r.showFooter);
        }
      }
      class T {
        constructor(t, a, r, p) {
          (this.app = t),
            (this.route = a),
            (this.router = r),
            (this.modal = p),
            (this.showFooter = !0),
            (this.destroy$ = new A.x()),
            (this.subMenu = !1),
            (this.showFooter = a.snapshot.data.showFooter ?? !0),
            (this.urlPath = location.pathname);
        }
        ngOnInit() {
          this.app.events$
            .pipe(
              (0, _.h)((t) => 'signin' === t.event),
              (0, g.R)(this.destroy$)
            )
            .subscribe(() => this.showSignin()),
            this.route.queryParams
              .pipe(
                (0, _.h)((t) => t.act && 'signin' === t.act),
                (0, g.R)(this.destroy$)
              )
              .subscribe(() => this.showSignin()),
            this.router.events
              .pipe(
                (0, _.h)((t) => t instanceof n.m2),
                (0, g.R)(this.destroy$)
              )
              .subscribe(() => {
                (this.urlPath = location.pathname), (this.subMenu = !1);
              });
        }
        ngOnDestroy() {
          this.destroy$.next(!0), this.destroy$.unsubscribe();
        }
        toggleSubMenu() {
          this.subMenu = !this.subMenu;
        }
        onDocumentClick(t) {
          this.subMenu &&
            (this.submenuRef.nativeElement.contains(t.target) ||
              (this.subMenu = !1));
        }
        showSignin() {
          this.app.isLogged
            ? this.router.navigate(['/account']).then()
            : this.modal.show(L);
        }
      }
      (T.ɵfac = function (t) {
        return new (t || T)(e.Y36(u.z), e.Y36(n.gz), e.Y36(n.F0), e.Y36(m.Z));
      }),
        (T.ɵcmp = e.Xpm({
          type: T,
          selectors: [['ng-component']],
          viewQuery: function (t, a) {
            if ((1 & t && e.Gf(P, 5), 2 & t)) {
              let r;
              e.iGM((r = e.CRH())) && (a.submenuRef = r.first);
            }
          },
          hostBindings: function (t, a) {
            1 & t &&
              e.NdJ(
                'click',
                function (p) {
                  return a.onDocumentClick(p);
                },
                !1,
                e.evT
              );
          },
          decls: 2,
          vars: 3,
          consts: [
            ['class', 'wrapper', 4, 'ngLet'],
            [1, 'wrapper'],
            ['class', 'header-mob js-paddingOffset', 3, 'active', 4, 'ngIf'],
            [1, 'header'],
            [1, 'header-top', 'js-paddingOffset'],
            [1, 'container'],
            [1, 'header-submenu'],
            ['routerLink', '/offer', 1, 'header-submenu__item'],
            [1, 'header-submenu__icon'],
            ['src', 'assets/img/logo-3.svg', 'alt', ''],
            ['routerLink', '/affiliate_program', 1, 'header-submenu__item'],
            [1, 'row', 'd-flex', 'align-items-center'],
            [1, 'col-5', 'col-xl-2', 'd-flex', 'align-items-center'],
            [1, 'header-burger', 3, 'click'],
            ['routerLink', '/', 'aria-label', 'Veqber', 1, 'header-logo'],
            ['src', '/assets/img/logo.svg', 'alt', ''],
            [
              1,
              'col-7',
              'col-xl-10',
              'd-flex',
              'align-items-center',
              'justify-content-end',
            ],
            [1, 'header-nav'],
            [1, 'header-menu'],
            [
              'routerLink',
              '/',
              'routerLinkActive',
              'active',
              3,
              'routerLinkActiveOptions',
            ],
            ['routerLink', '/about', 'routerLinkActive', 'active'],
            ['href', 'javascript:void(0)', 3, 'click'],
            ['submenuRef', ''],
            ['routerLink', '/events', 'routerLinkActive', 'active', 4, 'ngIf'],
            ['routerLink', '/media', 'routerLinkActive', 'active'],
            ['routerLink', '/contacts', 'routerLinkActive', 'active'],
            [3, 'ngSwitch'],
            ['class', 'header-hero', 4, 'ngSwitchCase'],
            ['class', 'header-btns', 4, 'ngSwitchCase'],
            ['class', 'footer', 4, 'ngIf'],
            [1, 'header-mob', 'js-paddingOffset'],
            ['nicescroll', '', 1, 'nicescroll-box'],
            [1, 'wrap'],
            [4, 'ngIf'],
            ['class', 'm-btn white full', 'routerLink', '/account', 4, 'ngIf'],
            [1, 'header-mob__menu'],
            ['routerLink', 'about', 'routerLinkActive', 'active'],
            ['routerLink', '/offer', 'routerLinkActive', 'active'],
            ['routerLink', '/affiliate_program', 'routerLinkActive', 'active'],
            ['routerLink', '/faq', 'routerLinkActive', 'active'],
            ['routerLink', '/terms', 'routerLinkActive', 'active'],
            ['className', 'header-mob__soc mb-4'],
            [1, 'header-mob__text'],
            ['routerLink', '/account', 1, 'm-btn', 'white', 'full'],
            ['routerLink', '/events', 'routerLinkActive', 'active'],
            [
              'href',
              'javascript:void(0)',
              1,
              'm-btn',
              'dark',
              'full',
              3,
              'click',
            ],
            ['routerLink', '/auth/signup', 1, 'm-btn', 'white', 'full'],
            [1, 'header-hero'],
            ['routerLink', '/account', 1, 'header-sign'],
            [1, 'header-btns'],
            ['href', 'javascript:void(0)', 1, 'header-login', 3, 'click'],
            ['routerLink', '/auth/signup', 1, 'header-sign'],
            [1, 'footer'],
            [1, 'row'],
            [1, 'col-lg-8', 'col-6', 'd-flex', 'align-items-center'],
            ['routerLink', '/', 'aria-label', 'Veqber', 1, 'footer-logo'],
            ['src', '/assets/img/logo-2.svg', 'alt', ''],
            [1, 'd-none', 'd-lg-block'],
            [1, 'footer-cont'],
            [
              1,
              'col-lg-4',
              'col-6',
              'd-flex',
              'justify-content-end',
              'align-items-center',
            ],
            [1, 'col-lg-6'],
            [1, 'd-block', 'd-lg-none'],
            [
              'class',
              'footer-map change-img',
              'type',
              'img',
              3,
              'timelapse',
              4,
              'ngLet',
            ],
            [1, 'col-md-4', 'col-6'],
            [1, 'footer-menu'],
            [1, 'col-md-8', 'col-6'],
            [1, 'footer-text'],
            [1, 'footer-copy', 3, 'innerHTML'],
            ['type', 'img', 1, 'footer-map', 'change-img', 3, 'timelapse'],
            ['src', 'assets/img/footer-map-old.webp', 'alt', ''],
            ['class', 'm-btn', 'target', '_blank', 3, 'href', 4, 'ngIf'],
            ['target', '_blank', 1, 'm-btn', 3, 'href'],
          ],
          template: function (t, a) {
            1 & t && (e.YNc(0, se, 57, 45, 'div', 0), e.ALo(1, 'async')),
              2 & t && e.Q6J('ngLet', e.lcZ(1, 1, a.app.viewport$));
          },
          dependencies: [
            c.O5,
            c.RF,
            c.n9,
            n.lC,
            n.rH,
            n.Od,
            w.A,
            J.C,
            R.x,
            Q.h,
            E.r,
            D.p,
            Y.x,
            B.y,
            c.Ov,
            q.X$,
            $.m,
          ],
          encapsulation: 2,
          changeDetection: 0,
        }));
    },
    1146: (b, Z, o) => {
      o.d(Z, { A: () => d });
      var n = o(4650),
        A = o(900),
        _ = o(6895),
        g = o(1104),
        s = o(6064);
      function f(u, c) {
        if (
          (1 & u &&
            (n.TgZ(0, 'a', 4),
            n.O4$(),
            n.TgZ(1, 'svg'),
            n._UZ(2, 'use', 5),
            n.qZA()()),
          2 & u)
        ) {
          const l = c.ngIf;
          n.Q6J('linkTo', l.value)('title', l.label);
        }
      }
      function e(u, c) {
        if (
          (1 & u &&
            (n.TgZ(0, 'a', 4),
            n.O4$(),
            n.TgZ(1, 'svg'),
            n._UZ(2, 'use', 5),
            n.qZA()()),
          2 & u)
        ) {
          const l = c.ngIf;
          n.Q6J('linkTo', l.value)('title', l.label);
        }
      }
      function m(u, c) {
        if (
          (1 & u &&
            (n.ynx(0),
            n.TgZ(1, 'a', 6),
            n.O4$(),
            n.TgZ(2, 'svg'),
            n._UZ(3, 'use'),
            n.qZA()(),
            n.BQk()),
          2 & u)
        ) {
          const l = c.$implicit;
          n.xp6(1),
            n.Q6J('href', l.value, n.LSH)('title', l.baggage.name),
            n.uIk('aria-label', l.type),
            n.xp6(2),
            n.uIk(
              'href',
              'assets/img/sprite.svg#' + l.baggage.code,
              null,
              'xlink'
            );
        }
      }
      function h(u, c) {
        if (
          (1 & u &&
            (n.TgZ(0, 'div', 1),
            n.YNc(1, f, 3, 2, 'a', 2),
            n.YNc(2, e, 3, 2, 'a', 2),
            n.YNc(3, m, 4, 4, 'ng-container', 3),
            n.qZA()),
          2 & u)
        ) {
          const l = c.ngLet,
            v = n.oxw();
          n.Q6J('className', v.className),
            n.xp6(1),
            n.Q6J('ngIf', v.app.config.company.telegram[0]),
            n.xp6(1),
            n.Q6J('ngIf', v.app.config.company.telegram[1]),
            n.xp6(1),
            n.Q6J('ngForOf', l);
        }
      }
      class d {
        constructor(c) {
          (this.app = c), (this.className = 'footer-soc');
        }
      }
      (d.ɵfac = function (c) {
        return new (c || d)(n.Y36(A.z));
      }),
        (d.ɵcmp = n.Xpm({
          type: d,
          selectors: [['app-socials']],
          inputs: { className: 'className' },
          decls: 1,
          vars: 1,
          consts: [
            [3, 'className', 4, 'ngLet'],
            [3, 'className'],
            ['type', 'telegram', 3, 'linkTo', 'title', 4, 'ngIf'],
            [4, 'ngFor', 'ngForOf'],
            ['type', 'telegram', 3, 'linkTo', 'title'],
            [0, 'xlink', 'href', 'assets/img/sprite.svg#tg'],
            ['target', '_blank', 3, 'href', 'title'],
          ],
          template: function (c, l) {
            1 & c && n.YNc(0, h, 4, 4, 'div', 0),
              2 & c && n.Q6J('ngLet', l.app.company.social);
          },
          dependencies: [_.sg, _.O5, g.h, s.V],
          encapsulation: 2,
          changeDetection: 0,
        }));
    },
    126: (b, Z, o) => {
      o.d(Z, { p: () => f });
      var n = o(7579),
        A = o(9300),
        _ = o(2722),
        g = o(4650),
        s = o(900);
      class f {
        get image() {
          return this.app.timelapse
            ? `${this.imageName}-new.webp`
            : `${this.imageName}-old.webp`;
        }
        constructor(m, h) {
          (this.app = m),
            (this.elem = h),
            (this.imageName = ''),
            (this.type = 'bg'),
            (this.destroy$ = new n.x());
        }
        ngAfterViewInit() {
          this.setTimelapseImage(),
            this.app.events$
              .pipe(
                (0, A.h)((m) => 'timelapseChange' === m.event),
                (0, _.R)(this.destroy$)
              )
              .subscribe(() => this.setTimelapseImage());
        }
        ngOnDestroy() {
          this.destroy$.next(!0), this.destroy$.unsubscribe();
        }
        setTimelapseImage() {
          const m = this.elem.nativeElement,
            h = this.image;
          if ('img' === this.type) {
            const d = m.querySelector('img');
            d && (d.src = `/assets/img/${h}`);
          } else m.style.backgroundImage = `url(assets/img/${h})`;
        }
      }
      (f.ɵfac = function (m) {
        return new (m || f)(g.Y36(s.z), g.Y36(g.SBq));
      }),
        (f.ɵdir = g.lG2({
          type: f,
          selectors: [['', 'timelapse', '']],
          inputs: { imageName: ['timelapse', 'imageName'], type: 'type' },
        }));
    },
  },
]);
