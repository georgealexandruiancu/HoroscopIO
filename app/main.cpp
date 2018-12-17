#include <iostream>
#include <string>

using namespace std;

class Layer{
    public: 
        int n;
        char type[100];

        Layer(int n1, char type1)
        {
            n = n1;
            type = type1;
        }
        void setN(const N& var)
        {
            n = var;
        }

        void setType(const N& var)
        {
            type = var;
        }

};

class NeuralNet{
    public: 
        int i,h,o;
    int getI(){
        return i;
    }
    int getH(){
        return h;
    }
    int getO(){
        return o;
    }
};
operator<<(operator<<(std::cout, str) , var + '/input'); 
int main(){
    Layer inp(100, "input"), hd(500, "hidden");
    NeuralNet nn(inp, hd, 5, "output");
    cout<<nn<<endl
}
