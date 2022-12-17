#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdbool.h>

int startDay = 7;
int endDay = 19;
int currentHour = 18;

typedef struct {
    char name[20];
    char color[20];
} Frog;

typedef struct {
    int air;
} Air;

typedef struct {
    double grass;
} Grass;

typedef struct {
    char name[30];
} Tree;

typedef struct {
    char name[30];
} Sun;

void create_frog_object(Frog* this, const char* name, const char* color) {
    strcpy(this->name, name);
    strcpy(this->color, color);
}

void create_air_object(Air* this, int quantity) {
    this->air = quantity;
}

void create_grass_object(Grass* this) {
    this->grass = INFINITY;
}

void create_sun_object(Sun* this, const char* name) {
    strcpy(this->name, name);
}

void create_tree_object(Tree* this, const char* name) {
    strcpy(this->name, name);
}

bool sun_is_shining(int hour) {
    if (hour >= startDay && hour <= endDay) {
        return true;
    }
    return false;
}

void eating(Frog* frog, Grass* grass) {
    printf("%s", frog->name);
    printf(" is eating grass. \n");
    grass->grass -= 10;
}

void breathing(Frog* frog, Air* air, bool time) {
    if (time) {
        if (air->air > 0) {
            printf("%s is breathing. \n", frog->name);
            air->air--;
        } else {
            printf("There is no oxygen. %s can't breathe, and will die soon :( \n", frog->name);
        }
    }
}

void sleeping(bool time, Frog* frog) {
    if (time) {
        printf("%s is awake. \n", frog->name);
    } else {
        printf("%s is asleep now. \n", frog->name);
    }
}

void moving(Frog* frog) {
    printf("%s is moving. \n", frog->name);
}

void produceOxygen(bool time, Air* air, Sun* sun, Tree* tree) {
    if(time) {
        printf("%s is shining. %s is producing oxygen. \n", sun->name, tree->name);
        air->air++;
    }
}

void destruct_frog(Frog* frog) { }
void destruct_air(Air* air) { }
void destruct_grass(Grass* grass) { }
void destruct_sun(Sun* sun) { }
void destruct_tree(Tree* tree) { }

int main()
{
    Frog frog;
    Air air;
    Grass grass;
    Sun sun;
    Tree tree;
    bool time = sun_is_shining(currentHour);
    create_frog_object(&frog, "Fogy", "yellow");
    create_grass_object(&grass);
    create_air_object(&air, 100);
    create_sun_object(&sun, "Fogy's world's sun");
    create_tree_object(&tree, "Fogy's world's tree");
    eating(&frog, &grass);
    moving(&frog);
    sleeping(time, &frog);
    breathing(&frog, &air, time);
    produceOxygen(time, &air, &sun, &tree);
    destruct_frog(&frog);
    destruct_air(&air);
    destruct_grass(&grass);
    destruct_sun(&sun);
    destruct_tree(&tree);

    return 0;    
}

