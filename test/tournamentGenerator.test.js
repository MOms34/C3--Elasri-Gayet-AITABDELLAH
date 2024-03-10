import { expect } from "chai";
import TournamentGenerator from "../src/tournamentGenerator.js";

describe("Tests du générateur de tournoi", () => {
    describe("Génération des poules", () => {
        it("Devrait générer le bon nombre de poules", () => {
            const equipes = [
                { name: "Équipe 1", players: ["Joueur 1", "Joueur 2", "Joueur 3"] },
                { name: "Équipe 2", players: ["Joueur 4", "Joueur 5", "Joueur 6"] },
                { name: "Équipe 3", players: ["Joueur 7", "Joueur 8", "Joueur 9"] },
                { name: "Équipe 4", players: ["Joueur 10", "Joueur 11", "Joueur 12"] },
                { name: "Équipe 5", players: ["Joueur 13", "Joueur 14", "Joueur 15"] },
                { name: "Équipe 6", players: ["Joueur 16", "Joueur 17", "Joueur 18"] }
            ];
            const generateurTournoi = new TournamentGenerator(equipes);
            generateurTournoi.generatePoules();
            expect(generateurTournoi.poules).to.have.lengthOf(2);
        });
    });

    describe("Simulation des matches de poules", () => {
        it("Devrait qualifier les bonnes équipes pour les phases finales", () => {
            const equipes = [
                { name: "Équipe 1", players: ["Joueur 1", "Joueur 2", "Joueur 3"] },
                { name: "Équipe 2", players: ["Joueur 4", "Joueur 5", "Joueur 6"] },
                { name: "Équipe 3", players: ["Joueur 7", "Joueur 8", "Joueur 9"] },
                { name: "Équipe 4", players: ["Joueur 10", "Joueur 11", "Joueur 12"] }
            ];
            const generateurTournoi = new TournamentGenerator(equipes);
            generateurTournoi.generatePoules();
            generateurTournoi.simulatePoulesMatches();
            expect(generateurTournoi.finalStages[0]).to.have.lengthOf(4);
        });
    });

    describe("Génération des phases finales", () => {
        it("Devrait générer correctement les phases finales", () => {
            const equipes = [
                { name: "Équipe 1", players: ["Joueur 1", "Joueur 2", "Joueur 3"] },
                { name: "Équipe 2", players: ["Joueur 4", "Joueur 5", "Joueur 6"] },
                { name: "Équipe 3", players: ["Joueur 7", "Joueur 8", "Joueur 9"] },
                { name: "Équipe 4", players: ["Joueur 10", "Joueur 11", "Joueur 12"] }
            ];
            const generateurTournoi = new TournamentGenerator(equipes);
            generateurTournoi.generatePoules();
            generateurTournoi.simulatePoulesMatches();
            generateurTournoi.generateFinalStages();
            expect(generateurTournoi.finalStages).to.have.lengthOf.at.least(1);
        });
    });
});
