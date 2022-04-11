from unidades import *

def mostra_menu_de_grandezas():
    print('Escolha a grandeza você quer converter:')
    print('')
    print('1. Distância')
    print('2. Tempo')

    return int(input('\n>: '))

def mostra_menu_unidades_de_medida_de(tipo):
    print('Escolha que tipo de medida você quer converter:')
    print('')
    for (index, unidade) in enumerate(list(unidades.values())[tipo - 1]):
        print(f'{index + 1}. {unidade}')

    return int(input('\n>: '))

def mostra_menu_unidades_de_medida_para(tipo):
    print('Escolha para qual tipo de medida você quer converter:')
    print('')
    for (index, unidade) in enumerate(list(unidades.values())[tipo - 1]):
        print(f'{index + 1}. {unidade}')

    return int(input('\n>: '))

def distancia(de, valor, para):
    if (de == 1):
        if (para == 1):
            return valor
        elif (para == 2):
            return valor / 100
        elif (para == 3):
            return valor / (100 * 1000)
    if (de == 2):
        if (para == 1):
            return valor * 100
        elif (para == 2):
            return valor
        elif (para == 3):
            return valor / 1000
    if (de == 3):
        if (para == 1):
            return valor * (100 * 1000)
        elif (para == 2):
            return valor * 1000
        elif (para == 3):
            return valor

def tempo(de, valor, para):
    if (de == 1):
        if (para == 1):
            return valor
        elif (para == 2):
            return valor / 60
        elif (para == 3):
            return valor / (60 * 60)
    if (de == 2):
        if (para == 1):
            return valor * 60
        elif (para == 2):
            return valor
        elif (para == 3):
            return valor / 60
    if (de == 3):
        if (para == 1):
            return valor * (60 * 60)
        elif (para == 2):
            return valor * 60
        elif (para == 3):
            return valor
