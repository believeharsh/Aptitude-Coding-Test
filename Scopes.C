#include <stdio.h>

int main(void) {
   int first  = 10;
  int second = 20;
  int third = 30;
  {
    int third = second - first ;
    printf("%d \n", third);
    
  }
  printf("%d", third);
}
// Scope of variables in applying here so It's really Important In terms of coding interview. 