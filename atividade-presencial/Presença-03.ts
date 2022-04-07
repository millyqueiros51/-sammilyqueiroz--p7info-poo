classe  Pilha {
    // atributos passando da classe
    pilha : número [ ] = [ ]
    topo : número  =  - 1
    maxPilha  =  4

    // Metodo para verificar se a Pilha está vazia
    isEmpty ( ) : número {
        if ( this . topo  ==  - 1 ) {
            retornar  1
        } senão {
            retornar  0
        }
    }
    // Metodo para verificar se a Pilha está cheia
    isFull ( ) : número {
        if ( this . topo  ==  this . maxStack ) {
            retornar  1
        } senão {
            retornar  0
        }
    }
    // Método para inserir elementos na Pilha
    push ( num : número ) : void {
        if ( this . isFull ( )  ==  1 ) {
            consola . log ( 'Pilha cheia' )
        } senão {
            isso . topo ++
            isso . pilha [ isso . topo ]  =  num
            consola . log ( 'Elemento' + num + 'Adicionados!' )
        }
    }
    // Método para removedor de elementos na Pilha
    pop ( ) : número  |  vazio {
        if ( this . isEmpty ( )  ==  1 ) {
            consola . log ( 'Pilha vazia' )
        } senão {
            deixe  aux  =  this . pilha [ isso . topo ]
            consola . log ( 'Elemento' + aux + 'Retirado' )
            isso . topo --
            retorno  auxiliar
        }
    }
    // Método para mostrar a Pilha
    ver ( ) : void {
        if ( this . isEmpty ( )  ==  1 ) {
            consola . log ( 'Pilha Vazia' )
         } senão {
            for ( deixe  i  =  0 ;  i  <=  isso . topo ;  i ++ ) {
                consola . log ( ' Pilha tem o elemento' + this.stack [ i ] )    
            }
        }
    }
}
// Criando um objeto do tipo Stack
let  pilha : Stack  =  new  Stack ( )

// Inserindo elementos na Pilha
pilha . empurre ( 1 )
pilha . empurre ( 2 )
pilha . empurre ( 3 )
pilha . empurre ( 4 )
consola . log ( '-------------------------' )
// avaliando a Pilha (Posui 4 elementos)
pilha . ver ( )
consola . log ( '-------------------------' )
// Removendo 2 elementos da Pilha
pilha . pop ( )
pilha . pop ( )
consola . log ( '-------------------------' )
// avaliando a Pilha (Posui 2 elementos)
pilha . ver ( )
consola . log ( '-------------------------' )
// Removendo 2 elementos da Pilha
pilha . pop ( )
pilha . pop ( )
consola . log ( '-------------------------' )
//compensando a pilha (Vazia)
pilha . ver ( )
