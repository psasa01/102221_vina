const express = require("express");
const router = express.Router();
const vinoController = require("../controllers/vinoController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const slikaController = require("../controllers/slikaController");
const forumController = require("../controllers/forumController");
const passport = require("passport");
const passportConfig = require("../handlers/passport");

const { catchErrors } = require("../handlers/errorHandlers");

router.get("/mojaKolekcijaVina", catchErrors(vinoController.mojaKolekcijaVina));
router.get("/", catchErrors(vinoController.getIndex));
router.get("/vina", catchErrors(vinoController.prikaziVina));
// router.get('/:page', catchErrors(vinoController.prikaziVina));
router.get(
  "/dodaj-vino",
  authController.isLoggedIn,
  authController.isAdministrator,
  vinoController.dodajVino
);

router.post(
  "/dodaj-vino",
  vinoController.dodajSliku,
  vinoController.resize,
  catchErrors(vinoController.snimiVino)
);

router.post(
  "/dodaj-vino/:id",
  vinoController.dodajSliku,
  vinoController.resize,
  catchErrors(vinoController.snimiUredjenoVino)
);

router.get("/vino/:id/ukloni", catchErrors(vinoController.ukloniVino));

router.get("/vina", catchErrors(vinoController.prikaziVina));
router.get("/vino/:id/uredi", catchErrors(vinoController.urediVino));
router.get("/vino/:id", catchErrors(vinoController.prikaziJednoVino));

router.get("/zemlje", catchErrors(vinoController.pretragaPoZemljama));
router.get("/zemlje/:zemlja", catchErrors(vinoController.pretragaPoZemljama));

router.get("/vrste", catchErrors(vinoController.pretragaPoVrstama));
router.get("/vrste/:vrsta", catchErrors(vinoController.pretragaPoVrstama));

router.get("/korisnici", catchErrors(vinoController.pretragaPoKorisnicima));
router.get(
  "/korisnici/:korisnik",
  catchErrors(vinoController.pretragaPoKorisnicima)
);

router.get("/godine", catchErrors(vinoController.pretragaPoGodinama));
router.get("/godine/:godina", catchErrors(vinoController.pretragaPoGodinama));

router.get("/zadnjeDodani", catchErrors(vinoController.prikazi20ZadnjihVina));

router.get("/pretraga", vinoController.pretragaVina);

router.get("/login", userController.login);
router.post(
  "/login",
  catchErrors(authController.isActive),
  authController.login
);

router.get("/register", userController.registerForm);
router.post(
  "/register",
  userController.validateRegister,
  userController.register
);

router.get("/logout", authController.logout);

router.get("/racun", authController.isLoggedIn, userController.racun);
router.post("/racun", catchErrors(userController.urediKorisnickiRacun));

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["email", "public_profile"],
  })
);
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    successFlash: `Uspješno ste se prijavili putem Facebooka. Dobrodošli`,
    failureRedirect: "/login",
  })
);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    req.flash(
      "success",
      "Uspješno ste se prijavili putem Google korisničkog računa! Dobrodošli!"
    );
    res.redirect("/");
  }
);

router.get(
  "/admin",
  authController.isAdministrator,
  catchErrors(userController.adminPanel)
);

router.get("/admin/oduzmi/:id", catchErrors(userController.oduzmiAdminPrava));
router.get(
  "/admin/dodijeli/:id",
  catchErrors(userController.dodijeliAdminPrava)
);

router.get("/aktivacija/:id", authController.aktivacija);
router.post("/aktivacija", catchErrors(authController.aktiviraj));

router.get("/reset", userController.reset);
router.post("/reset-email-form", catchErrors(userController.resetEmailForm));
router.get("/reset-pass/:token", catchErrors(userController.promjenaSifre));
router.post(
  "/reset-pass/:token",
  userController.uporediSifre,
  catchErrors(userController.promjenaSifreFinal)
);

router.get("/galerija", catchErrors(slikaController.galerija));

router.post(
  "/dodajSliku",
  slikaController.dodajSliku,
  slikaController.resize400,
  slikaController.resize1200,
  catchErrors(slikaController.snimiSliku)
);

router.get("/izbrisi-sliku", catchErrors(slikaController.izbrisiSlikuPage));
router.get("/slika/:id/ukloni", catchErrors(slikaController.izbrisiSliku));

router.get("/forum", forumController.forum);
router.get("/forum/post/:id", catchErrors(forumController.prikaziPost));

router.get("/forum/nova-tema", forumController.novaTema);

router.post("/forum/nova-tema", catchErrors(forumController.postaviNovuTemu));
router.post("/forum/:id/odgovor", catchErrors(forumController.posaljiOdgovor));

router.get("/forum/:id/obrisi", catchErrors(forumController.obrisiTemu));

router.get(
  "/forum/:id/obrisi-odgovor/:postId",
  catchErrors(forumController.obrisiOdgovor)
);

module.exports = router;
