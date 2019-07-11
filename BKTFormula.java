import java.util.*;

public class BKTFormula {
   public static void main(String[] args) {
      Scanner s = new Scanner(System.in);

      // Intro
      System.out.println("Welcome to the sample BKT probability calculator!");
      System.out.println("Please enter decimal probabilities.\n");

      // Get parameters
      System.out.print("Enter P(L0): ");
      double init = s.nextDouble();
      double init_c = 1.0 - init;

      System.out.print("Enter P(T): ");
      double trans = s.nextDouble();
      double trans_c = 1.0 - trans;

      System.out.print("Enter P(S): ");
      double slip = s.nextDouble();
      double slip_c = 1.0 - slip;

      System.out.print("Enter P(G): ");
      double guess = s.nextDouble();
      double guess_c = 1.0 - guess;

      // Calculate conditional probabilities
      double learn_right = (init * slip_c) / (init * slip_c + init_c * guess);
      double learn_wrong = (init * slip) / (init * slip + init_c * guess_c);

      double new_learn_r = learn_right + (1.0 - learn_right) * trans;
      double new_learn_w = learn_wrong + (1.0 - learn_wrong) * trans;

      // Calculate likelihood correct
      double prob_right = init * slip_c + init_c * guess;

      // Print results
      System.out.println("\nIf student gets question right, new P(L) would be: " + new_learn_r);
      System.out.println("If student gets question wrong, new P(L) would be: " + new_learn_w);
      System.out.println("\nLikelihood that the student gets the question right: " + prob_right);
   }
}
