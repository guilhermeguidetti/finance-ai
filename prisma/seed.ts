// prisma/seed.ts

import {
  PrismaClient,
  TransactionType,
  TransactionCategory,
  TransactionPaymentMethod,
} from "@prisma/client";

const prisma = new PrismaClient();
const userId = "user_2r020LSiAxYsYkR0my0MiehDQJj";

async function main() {
  console.log("Iniciando o seed...");

  const transacoes = [
    {
      name: "Salário",
      type: TransactionType.DEPOSIT,
      amount: 5000.0,
      category: TransactionCategory.SALARY,
      paymentMethod: TransactionPaymentMethod.BANK_TRANSFER,
      date: new Date("2025-01-01"),
      userId,
    },
    {
      name: "Pagamento de aluguel",
      type: TransactionType.EXPENSE,
      amount: 1200.0,
      category: TransactionCategory.HOUSING,
      paymentMethod: TransactionPaymentMethod.BANK_SLIP,
      date: new Date("2025-01-03"),
      userId,
    },
    {
      name: "Supermercado",
      type: TransactionType.EXPENSE,
      amount: 300.5,
      category: TransactionCategory.FOOD,
      paymentMethod: TransactionPaymentMethod.DEBIT_CARD,
      date: new Date("2025-01-05"),
      userId,
    },
    {
      name: "Investimento em fundos",
      type: TransactionType.INVESTMENT,
      amount: 1500.0,
      category: TransactionCategory.OTHER,
      paymentMethod: TransactionPaymentMethod.BANK_TRANSFER,
      date: new Date("2025-01-07"),
      userId,
    },
    {
      name: "Conta de luz",
      type: TransactionType.EXPENSE,
      amount: 250.0,
      category: TransactionCategory.UTILITY,
      paymentMethod: TransactionPaymentMethod.BANK_SLIP,
      date: new Date("2025-01-10"),
      userId,
    },
    {
      name: "Conta de água",
      type: TransactionType.EXPENSE,
      amount: 150.0,
      category: TransactionCategory.UTILITY,
      paymentMethod: TransactionPaymentMethod.BANK_SLIP,
      date: new Date("2025-01-11"),
      userId,
    },
    {
      name: "Restaurante",
      type: TransactionType.EXPENSE,
      amount: 180.0,
      category: TransactionCategory.FOOD,
      paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
      date: new Date("2025-01-12"),
      userId,
    },
    {
      name: "Transporte público",
      type: TransactionType.EXPENSE,
      amount: 80.0,
      category: TransactionCategory.TRANSPORTATION,
      paymentMethod: TransactionPaymentMethod.CASH,
      date: new Date("2025-01-13"),
      userId,
    },
    {
      name: "Cinema",
      type: TransactionType.EXPENSE,
      amount: 50.0,
      category: TransactionCategory.ENTERTAINMENT,
      paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
      date: new Date("2025-01-14"),
      userId,
    },
    {
      name: "Consulta médica",
      type: TransactionType.EXPENSE,
      amount: 200.0,
      category: TransactionCategory.HEALTH,
      paymentMethod: TransactionPaymentMethod.BANK_TRANSFER,
      date: new Date("2025-01-15"),
      userId,
    },
    {
      name: "Cursos online",
      type: TransactionType.EXPENSE,
      amount: 300.0,
      category: TransactionCategory.EDUCATION,
      paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
      date: new Date("2025-01-16"),
      userId,
    },
    {
      name: "Farmácia",
      type: TransactionType.EXPENSE,
      amount: 90.0,
      category: TransactionCategory.HEALTH,
      paymentMethod: TransactionPaymentMethod.CASH,
      date: new Date("2025-01-17"),
      userId,
    },
    {
      name: "Investimento em criptomoedas",
      type: TransactionType.INVESTMENT,
      amount: 800.0,
      category: TransactionCategory.OTHER,
      paymentMethod: TransactionPaymentMethod.BANK_TRANSFER,
      date: new Date("2025-01-18"),
      userId,
    },
    {
      name: "Pizzaria",
      type: TransactionType.EXPENSE,
      amount: 120.0,
      category: TransactionCategory.FOOD,
      paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
      date: new Date("2025-01-20"),
      userId,
    },
    {
      name: "Compras online",
      type: TransactionType.EXPENSE,
      amount: 350.0,
      category: TransactionCategory.OTHER,
      paymentMethod: TransactionPaymentMethod.PIX,
      date: new Date("2025-01-21"),
      userId,
    },
    {
      name: "Ingresso para teatro",
      type: TransactionType.EXPENSE,
      amount: 100.0,
      category: TransactionCategory.ENTERTAINMENT,
      paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
      date: new Date("2025-01-22"),
      userId,
    },
    {
      name: "Manutenção do carro",
      type: TransactionType.EXPENSE,
      amount: 500.0,
      category: TransactionCategory.TRANSPORTATION,
      paymentMethod: TransactionPaymentMethod.BANK_TRANSFER,
      date: new Date("2025-01-23"),
      userId,
    },
    {
      name: "Estacionamento",
      type: TransactionType.EXPENSE,
      amount: 60.0,
      category: TransactionCategory.TRANSPORTATION,
      paymentMethod: TransactionPaymentMethod.CASH,
      date: new Date("2025-01-24"),
      userId,
    },
    {
      name: "Compra de livros",
      type: TransactionType.EXPENSE,
      amount: 200.0,
      category: TransactionCategory.EDUCATION,
      paymentMethod: TransactionPaymentMethod.DEBIT_CARD,
      date: new Date("2025-01-25"),
      userId,
    },
    {
      name: "Transferência recebida",
      type: TransactionType.DEPOSIT,
      amount: 750.0,
      category: TransactionCategory.OTHER,
      paymentMethod: TransactionPaymentMethod.PIX,
      date: new Date("2025-01-26"),
      userId,
    },
  ];

  // Insere cada transação no banco de dados
  for (const transacao of transacoes) {
    await prisma.transaction.create({ data: transacao });
  }

  console.log("Seed finalizado com sucesso.");
}

main()
  .catch((error) => {
    console.error("Erro ao executar o seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
