import { expect } from "chai";
import TeamGenerator from "../src/teamGenerator.js";

describe("Tests du générateur d'équipes", () => {
    describe("Génération des équipes", () => {
        it("Devrait générer un nombre correct d'équipes", () => {
            const joueurs = ['Joueur1', 'Joueur2', 'Joueur3', 'Joueur4', 'Joueur5', 'Joueur6'];
            const generateurEquipes = new TeamGenerator(joueurs);
            generateurEquipes.generateTeams();
            expect(generateurEquipes.teams).to.have.lengthOf(Math.ceil(joueurs.length / 3));
        });

        it("Devrait répartir les joueurs dans les équipes de manière équitable", () => {
            const joueurs = ['Joueur1', 'Joueur2', 'Joueur3', 'Joueur4', 'Joueur5', 'Joueur6'];
            const generateurEquipes = new TeamGenerator(joueurs);
            generateurEquipes.generateTeams();
            generateurEquipes.teams.forEach(equipe => {
                expect(equipe.players).to.have.lengthOf(3);
            });
        });
    });

    describe("Récupération des équipes", () => {
        it("Devrait renvoyer les équipes générées", () => {
            const joueurs = ['Joueur1', 'Joueur2', 'Joueur3', 'Joueur4', 'Joueur5', 'Joueur6'];
            const generateurEquipes = new TeamGenerator(joueurs);
            generateurEquipes.generateTeams();
            const equipes = generateurEquipes.getTeams();
            expect(equipes).to.be.an("array").that.is.not.empty;
            equipes.forEach(equipe => {
                expect(equipe).to.have.property("name").that.is.a("string");
                expect(equipe).to.have.property("players").that.is.an("array").with.lengthOf(3);
            });
        });
    });
});
